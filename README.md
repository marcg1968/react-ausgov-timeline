# DEPRECATED - Timeline of Prime Ministers which parties held power in Australian governments

This is now integrated into the React SPA at https://titbits.info/timeline-australian-prime-ministers

## References and sources

- https://www.naa.gov.au/explore-collection/australias-prime-ministers
- https://en.wikipedia.org/w/index.php?title=List_of_prime_ministers_of_Australia

## Install `Node.js` modules

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

