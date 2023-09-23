



## bank  modern app

project structure

![image-20230923202307014](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232023281.png)![image-20230923202339191](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232023261.png)

------

使用vite tailwind css， react

本次项目，比之前的都要复杂，首先我们将很多css类封装

我么吧图片资源也是封装起来，这样导入导出更加方便

![image-20230923202912612](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232029654.png)

我们首先在图片资源里面创建一个index.js

```jsx
import airbnb from "./airbnb.png";
import bill from "./bill.png";
import binance from "./binance.png";
import card from "./card.png";
import coinbase from "./coinbase.png";
import dropbox from "./dropbox.png";
import logo from "./logo.svg";
import quotes from "./quotes.svg";
import robot from "./robot.png";
import send from "./Send.svg";
```

我们用导入的方式，将图片存在变量中，

```jsx

export {
  airbnb,
  bill,
  binance,
  card,
  coinbase,
  dropbox,
  logo,
```

然后我们再用export导出，方便后续使用，就避免了使用路径去导入，这样更加集成化了。

然后我们吧在变量中引用

![image-20230923203228819](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232032855.png)

```jsx
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets"; 

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];
```

![image-20230923203320246](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232033321.png)

我们可以看到img:存入的是people，也就是assest当中的图片。这样非常方便我们导入也就只用from 到目录了，

##### component

![image-20230923203656762](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232036816.png)

我们先创建好组件，方便以后重用，下载ES7+react扩展，**rafce**就可以快速打出以下：

```jsx
import React from 'react'

const Billing = () => {
  return (
    <div>Billing</div>
  )
}

export default Billing
```

注意看我么你这里也有一个index.js

![image-20230923204121143](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232041194.png)

也是先导入，导出，就像一个中间商

```jsx
import Billing from "./Billing";
import Business from "./Business";
import Button from "./Button";
import Cta from "./CTA";
import CardDel from "./CardDel";
import Clients from "./Clients";
import Feedback from "./Feedback";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
export {
  Billing,
  Business,
  Button,
  CardDel,
  Clients,
  Cta,
  Feedback,
  Footer,
  GetStarted,
  Hero,
  NavBar,
  Stats,
  Testimonial,
};

```

##### APP

```jsx
import { NavBar } from "./components";
```

我们这里导入也很方便，也不用写很长的导入，在app文件

```jsx
const App = () => (
  <div className=" w-full bg-primary overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div>
  </div>
);

export default App;

```

这里我们用tailwind 语法编写类名，下载一个插件，写类名的时候会有提示

![image-20230923204435329](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232044430.png)

##### NavBar

import 

```jsx
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
```



```jsx
<nav className="flex items-center justify-between w-full py-6 navbar">
      <img
        src={logo}
        alt="this is the bank modern  logo"
        className="h-[32px] w-[124px]"
      />
      <ul className=" list-none sm: flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
```

![image-20230923204649739](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202309232046805.png)



