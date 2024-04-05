Aplikacja do tworzenia formularzy rekrutacyjnych i wspierająca onboarding

### Aby zacząć

```bash
yarn install
yarn dev
```

## Konfiguracja dockera, podłączenie lokalnej bazy danych:

```bash
# stawianie kontenera dockerowego w tle
$ docker-compose up -d
```

```bash
# Wysyłanie migracji do kontenera
$ prisma db push lub npx prisma db push
```

```bash
# seedowanie danych do kontenera
$ prisma db seed lub npx prisma db seed
```

```bash
# uruchomienie prisma studio
$ prisma studio lub npx prisma studio
```

Otwórz [http://localhost:3000](http://localhost:3000)
