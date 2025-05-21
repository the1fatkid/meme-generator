# Meme Generator 🖼️ 

A fun and interactive meme generator built using **React**! This project demonstrates how to work with **controlled components**, **API fetching**, and the **`useEffect` hook** in React. Users can enter custom top and bottom texts to generate their own memes using images fetched from the Imgflip API.

---

## 🚀 Features

- 💬 **Controlled Form Inputs**: Users can input top and bottom meme text.
- 🔄 **Live Text Update**: Text updates in real-time on the meme image as the user types.
- 🖼️ **Dynamic Meme Images**: Meme templates are fetched from the [Imgflip API](https://api.imgflip.com/get_memes) using `useEffect`.
- 🎲 **Random Meme Button**: A "Generate New Image" button selects and displays a random meme from the fetched array.


## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**


## 📝 How It Works

1. When the app loads, `useEffect` triggers a fetch request to `https://api.imgflip.com/get_memes` and stores the array of meme templates in a separate state.
2. The form at the top contains two input fields:
   - Top Text
   - Bottom Text  
   Both inputs are **controlled components**, meaning their values are tied to state, and changes are handled via `onChange` events.
3. As the user types, the meme preview is updated live with the new top and bottom texts.
4. Clicking the **"Generate New Image"** button selects a **random meme template** from the fetched array and updates the displayed image.



## 📦 Installation & Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/the1fatkid/meme-generator.git
   ```

2. **Navigate to the Project Directory**:
    ```bash
    cd meme-generator
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Development Server**:
    ```bash
    npm run dev
    ```

5. **Open the App**:
   Visit `http://localhost:5173` (or the URL specified by Vite) in your browser to interact with the app.

<br><br>

*Thanks for checking out my Meme Generator App! Have fun creating cool memes! 😄*   


