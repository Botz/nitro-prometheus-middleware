import { NitroApp } from 'nitropack';
import Prometheus from 'prom-client';
import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin'
import { eventHandler } from 'h3'

export default defineNitroPlugin((nitroApp: NitroApp) => {
  Prometheus.collectDefaultMetrics();

  const counter = new Prometheus.Counter({
    name: `http_requests_total`,
    help: 'Counter for total requests received',
  });

  nitroApp.h3App.stack.unshift({
    route: "/",
    handler: (event) => {
      const regex = new RegExp(/^\/metrics(\/?)$/)
      if (!regex.test(event.node.req.url)) {
        counter.inc(1);
      }
    },
  });

  nitroApp.router.add('/metrics', eventHandler(() => Prometheus.register.metrics()))
})
