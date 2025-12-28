# CityScope - Weather & News App

## Project Description

CityScope is a web application that displays current weather and news for a selected city. All API requests are handled on the server side to keep API keys secure. The interface is responsive and includes weather icons for better visualization.

---

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to the project folder:

```bash
cd ass2_backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your API keys:

```
OPENWEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_news_api_key
```

5. Start the server:

```bash
npm start
```

6. Open your browser and go to:

```
http://localhost:3000
```

---

## API Usage

* **Weather API** (`/weather/:city`)
  Returns:

  * Temperature (`temperature`)
  * Feels like (`feels_like`)
  * Description (`description`)
  * Coordinates (`coordinates`)
  * Wind speed (`wind_speed`)
  * Country code (`country`)
  * Rain volume for the last 3 hours (`rain_volume`)
  * Weather icon (`icon`)

* **News API** (`/news/:city`)
  Returns 5 latest articles for the selected city:

  * Title (`title`)
  * Short description (`description`)
  * Source link (`url`)

---

## Key Design Decisions

1. **Server-side API calls** – to keep API keys hidden from the client.
2. **Weather icons** – to improve the visual representation of weather.
3. **Responsive layout** – cards adjust for different devices.
4. **Clean code** – readable variables, functions, and project structure.

---

## Project Structure

```
backend-api-project/
│
├─ package.json           # project dependencies
├─ server.js              # backend (Express + API calls)
├─ .env                   # API keys
├─ public/
│   └─ index.html         # frontend (HTML, CSS, JS)
```

---

## Screenshots

<img width="1900" height="970" alt="image" src="https://github.com/user-attachments/assets/af81e0d0-e18c-4e7f-a9ac-95c5f6a786f5" />
<img width="1900" height="967" alt="image" src="https://github.com/user-attachments/assets/93765748-ad07-47b5-9642-1ade53ad5e65" />


---

