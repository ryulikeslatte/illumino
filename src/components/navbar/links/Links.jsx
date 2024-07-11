import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Dashboard",
            path: "/",
            image: "./dashboard icon.png",
        },
        {
            title: "Music",
            path: "/music",
            image: "./song icon.png",
        },
        {
            title: "Story",
            path: "/story",
            image: "./story icon.png",
        },
        {
            title: "Users",
            path: "/user",
            image: "./users.png",
        },
    ];

    return (
        <div>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
        );
  };
  
  export default Links;