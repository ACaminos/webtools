# Webtools

This is a project developed with **ReactJS, Vite, React Router DOM and Font Awesome** that allows sharing different types of tools and resources for developers.

## 🚀 Technologies used

- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Font Awesome](https://fontawesome.com/)

## 📌 Main Features

- Share useful tools and resources for developers.
- Browse tool categories by use.
- Modern and responsive design with optimized styles.
- Smooth navigation using React Router DOM.
- Attractive icons with Font Awesome.

## 📂 Installation and Execution

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ACaminos/webtools.git
```

### 2️⃣ Access the project directory:
```bash
cd webtools
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run the development server
```bash
npm run dev
```

## 🛠️ Resource Management Scripts

Interactive scripts to manage tools and resources in `src/resources/tools.js`:

| Command | Description |
|---------|-------------|
| `npm run new` | Add a new resource |
| `npm run edit` | Edit an existing resource |
| `npm run delete` | Delete a resource |

### Add new resource
```bash
npm run new
```
- Select a category or create a new one
- Enter name, URL, description, and preview image
- Validates duplicates by name and URL
- Option to add multiple resources in one session

### Edit resource
```bash
npm run edit
```
- Select category and resource to edit
- Press Enter to keep the current value
- Shows changes summary before confirming

### Delete resource
```bash
npm run delete
```
- Select category and resource to delete
- Shows resource details before confirming
- Option to delete multiple resources in one session
