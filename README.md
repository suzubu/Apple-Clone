# 📘 Apple iPhone 15 Pro — Product Showcase Clone

> A high-fidelity animated clone of Apple’s iPhone 15 Pro product page, built to replicate Apple’s sleek product storytelling using modern web technologies.

---

## 🖼 Preview

![App Preview](media/apple-clone-preview.gif)

---

## ⚙️ Getting Started

These instructions will get your project running locally.

```bash
# 1. Clone the repo
git clone https://github.com/suzubu/Apple-Clone.git

# 2. Navigate into the project folder
cd apple-clone

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

> Built with:  
> - [React](https://reactjs.org/)  
> - [Vite](https://vitejs.dev/)  
> - [TailwindCSS v4](https://tailwindcss.com/)  
> - [GSAP](https://greensock.com/gsap/)  
> - [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)

---

## ✨ Features

- 📱 iPhone 15 Pro interactive 3D model
- 🎬 Scroll-triggered page animations (GSAP)
- 📹 Responsive video highlight carousel
- 🌗 Smooth transitions, high contrast theming
- 🖥️ Optimized layout across all devices

---

## 💡 Dev Notes

- 3D model rendered with `@react-three/fiber` and custom materials
- Scroll animations choreographed with `ScrollTrigger`
- Lightweight asset handling for better performance
- Fully component-based architecture using React

---

## 📚 Inspiration / Credits

This project was inspired by:

- [JSMastery](https://www.youtube.com/watch?v=kRQbRAJ4-Fs&t=13506s)
- [Apple’s official iPhone 15 Pro site](https://www.apple.com/iphone-15-pro/)
- PMNDRS / drei / react-three-fiber community
- GSAP demos and reference animations

---

## 🧪 Known Issues

- ❌ Animations may drop frames on very low-end devices
- 🔍 Placeholder images may need higher resolution for retina displays

---

## 🔭 Roadmap / TODO

- [ ] Add scroll-based camera transitions for model interactions
- [ ] Add AR preview using WebXR
- [ ] Consider supporting dark/light toggle theming

---

## 📂 Folder Structure

```bash
apple-clone/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   └── models/
├── src/
│   ├── components/
│   ├── constants/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
```

---

## 📜 License

MIT — feel free to use and adapt!

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [Suzy Dev](https://github.com/suzydev)  
Feel free to reach out or contribute!
