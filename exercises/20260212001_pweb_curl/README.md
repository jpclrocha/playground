**Aluno:** João Pedro de Castro Laranjeira Rocha

**API escolhida:** CPTEC

**Link da documentação:** https://brasilapi.com.br/docs#tag/CPTEC

**Descrição da API:** Dados meteorológicos e oceanográficos do Centro de Previsão de Tempo e Estudos Climáticos (CPTEC/INPE).

**Parâmetros suportados:** cityName (string), icaoCode (string), cityCode (integer -> int32), days (integer -> int32)

---

## Chamada 1

**Comando:**

```
curl -v -w "\nTempo total: %{time_total}s\n" https://brasilapi.com.br/api/cptec/v1/cidade/Maceio
```

**Resposta**

```
* Host brasilapi.com.br:443 was resolved.
* IPv6: 2606:4700:3034::6815:4557, 2606:4700:3031::ac43:ce89
* IPv4: 172.67.206.137, 104.21.69.87
*   Trying 172.67.206.137:443...
* Connected to brasilapi.com.br (172.67.206.137) port 443
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / X25519 / id-ecPublicKey
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=brasilapi.com.br
*  start date: Feb  1 03:49:30 2026 GMT
*  expire date: May  2 04:44:44 2026 GMT
*  subjectAltName: host "brasilapi.com.br" matched cert's "brasilapi.com.br"
*  issuer: C=US; O=Google Trust Services; CN=WE1
*  SSL certificate verify ok.
*   Certificate level 0: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA256
*   Certificate level 1: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA384
*   Certificate level 2: Public key type EC/secp384r1 (384/192 Bits/secBits), signed using ecdsa-with-SHA384
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://brasilapi.com.br/api/cptec/v1/cidade/Maceio
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: brasilapi.com.br]
* [HTTP/2] [1] [:path: /api/cptec/v1/cidade/Maceio]
* [HTTP/2] [1] [user-agent: curl/8.5.0]
* [HTTP/2] [1] [accept: */*]
> GET /api/cptec/v1/cidade/Maceio HTTP/2
> Host: brasilapi.com.br
> User-Agent: curl/8.5.0
> Accept: */*
>
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
< HTTP/2 200
< date: Fri, 13 Feb 2026 00:00:21 GMT
< content-type: application/json; charset=utf-8
< content-length: 43
< access-control-allow-origin: *
< age: 3977
< cache-control: max-age=0, public
< etag: "129mg3ug3kx16"
< server: cloudflare
< strict-transport-security: max-age=63072000
< x-matched-path: /api/cptec/v1/cidade/[name]
< x-vercel-cache: HIT
< x-vercel-id: gru1::sfo1::h8qbl-1770940821238-ae088c455676
< cf-cache-status: DYNAMIC
< nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
< report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mbVem7DxmsP51jIyApG%2BN7%2BLz7exTMlMfKrtYCrDTWMvUJkOeDdtv%2FKqjOqYqQRSNVjpP2ykF89TIpdAYFzG0dc1YbLLXOHXaLLYfhGdwAc%3D"}]}
< cf-ray: 9cd00b84bc0a1f4b-GRU
< alt-svc: h3=":443"; ma=86400
<
* Connection #0 to host brasilapi.com.br left intact
[{"nome":"Maceió","id":233,"estado":"AL"}]
Tempo total: 0.185749s
```

**Descrição:** Comando para buscar cidades por nome, utilizei Maceio

**Código HTTP retornado:** `200`

**Cabeçalhos retornados:**

```
content-type=application/json; charset=utf-8
content-length: 43
access-control-allow-origin: *
```

**Tempo de resposta:** `0.805154s`

---

## Chamada 2

**Comando:**

```
curl -w "\nTempo total: %{time_total}s\n" -o previsao_maceio.json https://brasilapi.com.br/api/cptec/v1/clima/previsao/233 && cat previsao_maceio.json
```

**Resposta**

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   166  100   166    0     0    837      0 --:--:-- --:--:-- --:--:--   834

Tempo total: 0.198249s
{"cidade":"Maceió","estado":"AL","atualizado_em":"2026-02-12","clima":[{"data":"2026-02-13","condicao":"c","condicao_desc":"Chuva","min":24,"max":29,"indice_uv":0}]}
```

**Descrição:** Comando para buscar a previsão do tempo pelo código da cidade, utilizei Maceio, com o código que a chamada anterior deu na resposta. Nessa requisição, salvei a resposta num arquivo previsao_maceio.json e utilizei o cat para mostrar o que foi gravado no arquivo

**Código HTTP retornado:** `200`

**Cabeçalhos retornados:**

```
age: 0
cache-control: max-age=0, public
etag: "89gidffi4r4l"
```

**Tempo de resposta:** `0.194954s`

---

## Chamada 3

**Comando:**

```
curl https://brasilapi.com.br/api/cptec/v1/clima/previsao/233/4
```

**Resposta**

```
{"cidade":"Maceió","estado":"AL","atualizado_em":"2026-02-12","clima":[{"data":"2026-02-13","condicao":"c","condicao_desc":"Chuva","min":24,"max":29,"indice_uv":0},{"data":"2026-02-14","condicao":"c","condicao_desc":"Chuva","min":24,"max":29,"indice_uv":0},{"data":"2026-02-15","condicao":"pn","condicao_desc":"Parcialmente Nublado","min":24,"max":31,"indice_uv":0},{"data":"2026-02-16","condicao":"pn","condicao_desc":"Parcialmente Nublado","min":23,"max":31,"indice_uv":0}]}

```

**Descrição:** Comando para buscar a previsão de até 6 dias de determinada cidade. Utilizei 233, para Maceió e 4 dias.

**Código HTTP retornado:** `200`

**Cabeçalhos retornados:**

```
server: cloudflare
strict-transport-security: max-age=63072000
x-matched-path: /api/cptec/v1/clima/previsao/[cityCode]/[days]
```

**Tempo de resposta:** `0.749492s`

---

## Chamada 4

**Comando:**

```
curl -v -H 'Accept=application/json' https://brasilapi.com.br/api/cptec/v1/ondas/233
```

**Resposta**

```
* Host brasilapi.com.br:443 was resolved.
* IPv6: 2606:4700:3031::ac43:ce89, 2606:4700:3034::6815:4557
* IPv4: 104.21.69.87, 172.67.206.137
*   Trying 104.21.69.87:443...
* Connected to brasilapi.com.br (104.21.69.87) port 443
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384 / X25519 / id-ecPublicKey
* ALPN: server accepted h2
* Server certificate:
*  subject: CN=brasilapi.com.br
*  start date: Feb  1 03:49:30 2026 GMT
*  expire date: May  2 04:44:44 2026 GMT
*  subjectAltName: host "brasilapi.com.br" matched cert's "brasilapi.com.br"
*  issuer: C=US; O=Google Trust Services; CN=WE1
*  SSL certificate verify ok.
*   Certificate level 0: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA256
*   Certificate level 1: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA384
*   Certificate level 2: Public key type EC/secp384r1 (384/192 Bits/secBits), signed using ecdsa-with-SHA384
* using HTTP/2
* [HTTP/2] [1] OPENED stream for https://brasilapi.com.br/api/cptec/v1/ondas/233
* [HTTP/2] [1] [:method: GET]
* [HTTP/2] [1] [:scheme: https]
* [HTTP/2] [1] [:authority: brasilapi.com.br]
* [HTTP/2] [1] [:path: /api/cptec/v1/ondas/233]
* [HTTP/2] [1] [user-agent: curl/8.5.0]
* [HTTP/2] [1] [accept: */*]
> GET /api/cptec/v1/ondas/233 HTTP/2
> Host: brasilapi.com.br
> User-Agent: curl/8.5.0
> Accept: */*
>
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
< HTTP/2 200
< date: Fri, 13 Feb 2026 00:07:56 GMT
< content-type: application/json; charset=utf-8
< access-control-allow-origin: *
< age: 0
< cache-control: max-age=0, public
< report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mAG8cfwgjIEmQQIJc%2BNHayOxJF1HPb5nNTmSZsPgIP7v8ZF8PZcxZJ%2B2CPS6SLXC6KTo%2FhWFKplX1ie9ppwQyxhtIcoPrl9WzBWjMMlNUuw%3D"}]}
< etag: W/"tv1fl4ljro15v"
< server: cloudflare
< strict-transport-security: max-age=63072000
< x-matched-path: /api/cptec/v1/ondas/[cityCode]
< x-vercel-cache: MISS
< x-vercel-id: gru1::sfo1::zl8ct-1770941275941-075fb33e1e70
< cf-cache-status: DYNAMIC
< vary: accept-encoding
< nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
< cf-ray: 9cd0169e9d7df1cd-GRU
< alt-svc: h3=":443"; ma=86400
<
{"cidade":"Maceió","estado":"AL","atualizado_em":"2026-02-12","ondas":[{"data":"2026-02-12","dados_ondas":[{"hora":"00:00Z","vento":2.3,"direcao_vento":"E","direcao_vento_desc":"Leste","altura_onda":0.6,"direcao_onda":"SE","direcao_onda_desc":"Sudeste","agitation":"Fraco"},{"hora":"03:00Z","vento":1,"direcao_vento":"E","direcao_vento_desc":"Leste","altura_onda":0.6,"direcao_onda":"SE","direcao_onda_desc":"Sudeste","agitation":"Fraco"},{"hora":"06:00Z","vento":0.9,"direcao_vento":"ENE","direcao_vento_desc":"Lés-nordeste","altura_onda":0.6,"direcao_onda":"SE","direcao_onda_desc":"Sudeste","agitation":"Fraco"},{"hora":"09:00Z","vento":1.2,"direcao_vento":"NE","direcao_vento_desc":"Nordeste","altura_onda":0.5,"direcao_onda":"ESE","direcao_onda_desc":"Lés-sudeste","agitation":"Fraco"},{"hora":"12:00Z","vento":1.3,"direcao_vento":"SE","direcao_vento_desc":"Sudeste","altura_onda":0.5,"direcao_onda":"ESE","direcao_onda_desc":"Lés-sudeste","agitation":"Fraco"},{"hora":"15:00Z","vento":3.9,"direcao_vento":"ESE","di* Connection #0 to host brasilapi.com.br left intact
recao_vento_desc":"Lés-sudeste","altura_onda":0.5,"direcao_onda":"ESE","direcao_onda_desc":"Lés-sudeste","agitation":"Fraco"},{"hora":"18:00Z","vento":4,"direcao_vento":"ESE","direcao_vento_desc":"Lés-sudeste","altura_onda":0.5,"direcao_onda":"ESE","direcao_onda_desc":"Lés-sudeste","agitation":"Fraco"},{"hora":"21:00Z","vento":3.9,"direcao_vento":"ESE","direcao_vento_desc":"Lés-sudeste","altura_onda":0.5,"direcao_onda":"ESE","direcao_onda_desc":"Lés-sudeste","agitation":"Fraco"}]}]}
```

**Código HTTP retornado:** `200`

**Cabeçalhos retornados:**

```
x-vercel-cache: HIT
x-vercel-id: gru1::sfo1::64kn4-1770938550476-d5421d99d52a
cf-cache-status: DYNAMIC
```

**Tempo de resposta:** `0.217488s`

---

## Chamada 5

**Comando:**

```
curl -i https://brasilapi.com.br/api/cptec/v1/ondas/233/7
```

**Resposta**

```
HTTP/2 400
date: Fri, 13 Feb 2026 00:10:57 GMT
content-type: application/json; charset=utf-8
content-length: 130
access-control-allow-origin: *
age: 0
cache-control: max-age=0, s-maxage=86400, stale-while-revalidate, public
etag: "q4je5ygcj73j"
server: cloudflare
strict-transport-security: max-age=63072000
x-matched-path: /api/cptec/v1/ondas/[cityCode]/[days]
x-vercel-cache: MISS
x-vercel-id: gru1::sfo1::r4st5-1770941457161-a7d179eb014c
cf-cache-status: DYNAMIC
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tb7W12bFNnmgyO96yzMchanVeSOMhe2xfAplBwSR%2ButazLhwK0PyChya7E8ahRTYxsHUln9STLO6bJQ4fO%2B6C8Wbl7vumiapTxP%2Bc3837wQ%3D"}]}
cf-ray: 9cd01b0b3e92139e-GRU
alt-svc: h3=":443"; ma=86400

{"message":"Quantidade de dias inválida (mínimo 1 dia e máximo 6 dias)","type":"request_error","name":"INVALID_NUMBER_OF_DAYS"}
```

**Código HTTP retornado:** `400`

**Cabeçalhos retornados:**

```
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2iNy4AFkyXTxPjCSJWvHq4zRg%2FyFtm4LzROQwXVX0S3U%2BLc3%2FFcPu4yEuZKmIW3gi9j7dsxmzhB2Hd2YZ8wChb7%2BBiWU61%2BL4Q2NSY47Htw%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
cf-ray: 9ccfd8e2790bf1e2-GRU
```

**Tempo de resposta:** `0.387976s`
