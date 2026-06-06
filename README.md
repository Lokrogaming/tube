# Website Template with react


![Logo](/public/favicon.svg)<br><br>

![Stars](https://img.shields.io/github/stars/Lokrogaming-Inc/jsxtemplate1) &nbsp;
![Languages](https://img.shields.io/github/languages/count/Lokrogaming-Inc/jsxtemplate1) &nbsp;
![Top Language](https://img.shields.io/github/languages/top/Lokrogaming-Inc/jsxtemplate1) &nbsp;
![Last Commit](https://img.shields.io/github/last-commit/Lokrogaming-Inc/jsxtemplate1) &nbsp;


# Languages
[![Languages](https://skillicons.dev/icons?i=vite,tailwind,svg,react,npm,nodejs,md,html,githubactions,github,git,bash,css&theme=dark)](https://skillicons.dev)


| Version      | Key-Features | Date   | Supported
|-----------|--------------|----------|---------|
| V0.7.0    | Initial Commit       | 3.6.2026   | ✅️ |
| V1.0.0    | Fixed and changed style Theme | 6.6.2026 | ✅ | 




## 🖼 Picture Gallery (picture from the last commit)
![screenshot](/screenshots/home.png)



##  Hooks

###  useHooks
  
Basic Share Button: 
```jsx
import { useShare } from "../hooks/useShare";

export default function Button() {
  const { shareCurrentUrl } = useShare();

  return (
    <button
      onClick={() =>
        shareCurrentUrl({
          title: "Meine Website",
          text: "Schau dir das an!",
        })
      }
      className="px-4 py-2 bg-blue-600 text-white rounded-xl"
    >
      Share
    </button>
  );
}
```

Text Share:
```jsx
const { shareText } = useShare();

shareText("Das ist ein cooler Text");
```

URl Sharing:
```jsx
const { shareUrl } = useShare();

shareUrl("https://google.com", {
  title: "Google",
});
```

Share current URl:
```jsx
const { shareCurrentUrl } = useShare();

shareCurrentUrl({
  title: "Check this page",
  text: "Sehr coole Seite",
});
```

## Visitors

![Visitors](https://count.getloli.com/@lokrogaming-jsxtemplate1?name=Lokrogaming&theme=3d-num&padding=7&offset=3&align=center&scale=1.5&pixelated=0&darkmode=1)
