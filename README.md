# ponder

## Getting Started Locally :ship:

1. Clone this repository with `git clone <repository-link>` and cd into the project root
2. Confirm you have Python installed
3. Confirm you have psql

### Backend Setup (Mac OS) :floppy_disk:

1. `cd ponder/server` from the root project folder to move to the backend
2. Create local environment variables :closed_lock_with_key:
   1. Create a `.env` with the following contents
      ```
      POSTGRES_DB=ponder
      DATABASE_URL=postgres://postgres:postgres@localhost:5432/ponder
      POSTGRES_USER=postgres
      POSTGRES_PASSWORD=postgres
      POSTGRES_HOST=localhost
      POSTGRES_PORT=5432
      SECRET_KEY=
      PRODUCTION=False
      CORS_ORIGIN_WHITELIST='http://localhost:3000'
      OPENAI_API_KEY=
      ```
   2. replace SECRET_KEY and OPENAI_API_KEY with your own values
3. Set up your psql table:
   1. `brew services start postgresql` to start running postgres
   2. `psql -U postgres` to go into the postgres terminal interface
   3. `CREATE DATABASE ponder;` to create the required database
   4. `\l` and confirm the list of returned database names includes beantalks
   5. `\q` to quit the terminal interface and retur back to `/server` directory
4. Set up your virtual environment:
   1. Installation virtualenv: `pip install virtualenv`
   2. Initialize virtual environment: `python -m venv <your-virtual-env-name>`
   3. Activate virtual environment: `source <your-virtual-env-name>/bin/activate`
5. Install requirements.txt: `pip install -r requirements.txt`
6. Migrate database: `python manage.py migrate`
7. Run server: `python manage.py runserver`

### Mobile Setup:

1. `cd ponder/mobile` from the root project folder to move to the frontend
2. `npm install`
3. `npx expo start`
