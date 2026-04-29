# NewsMonkey - Stay Updated with the Latest News

NewsMonkey is a modern React-based news application that fetches the latest headlines from various categories using the NewsAPI. It features a clean UI, category-based navigation, and infinite scrolling.

## Features

- **Top Headlines**: Get the latest news from around the world.
- **Category Based News**: Browse news in categories like Business, Entertainment, General, Health, Science, Sports, and Technology.
- **Infinite Scroll**: Seamlessly browse news without clicking through pages.
- **Responsive Design**: Works perfectly on mobile and desktop.
- **Top Loading Bar**: Visual progress indicator during data fetching (In Progress).

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation and routing.
- **Bootstrap**: For styling and layout.
- **NewsAPI**: Data source for news content.
- **React Infinite Scroll Component**: To implement infinite scrolling.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API Key from [NewsAPI.org](https://newsapi.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd newsapp
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env.local` file in the root directory and add your NewsAPI key:

```env
REACT_APP_NEWS_API=your_api_key_here
```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `src/components`: Contains React components like Navbar, News, NewsItem, and Spinner.
- `src/App.js`: Main application component with routing logic.
- `public`: Static assets.

## License

This project is open-source and available under the [MIT License](LICENSE).
