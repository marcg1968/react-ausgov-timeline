# Timeline of Prime Ministers which parties held power in Australian governments

## Refs

https://www.naa.gov.au/explore-collection/australias-prime-ministers

## Installation of development

```bash
yarn install
```

## Running development instance

```bash
yarn start
```

## Building and deploying

### Build

```bash
yarn build
```

### Deploy

```bash
PORT=""
USER=""
HOST=""
FP=""
rsync -avr -e "ssh -p $PORT" --delete-before ./build/static/ ${USER}@${HOST}:${FP} && \
    rsync -avr -e "ssh -p $PORT" ./build/ ${USER}@${HOST}:${FP}
```

