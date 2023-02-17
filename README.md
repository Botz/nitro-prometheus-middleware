[![](https://img.shields.io/npm/l/nitro-prometheus-middleware)](https://img.shields.io/npm/l/nitro-prometheus-middleware)
![npm](https://img.shields.io/npm/v/nitro-prometheus-middleware)
# Nitro Prometheus Middleware

This is a middleware for [nitro](https://github.com/unjs/nitro), that expose metrics for prometheus.

## 🚀 Usage
1. Install 

```sh
npm install nitro-prometheus-middleware
```

2. Add `nitro-prometheus-middleware` to the `plugins` section of `nitro.config.ts`

```ts
import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  plugins: [
    'nitro-prometheus-middleware'
  ]
})
```

3. Metrics are available under `/metrics`

## Metrics
| Metric Name                      | Description                                     |
|:--------------------------------:|:-----------------------------------------------:|
| http_requests_total              | Counter for total requests received             |

There some default metrics exported from [Prom-Client]()

