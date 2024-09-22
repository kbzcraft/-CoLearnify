interface classCardProps {
  thumbnail: string;
  logo: string;
  title: string;
  creator: string;
}

export const recentClasss: classCardProps[] = [
  {
    thumbnail: "https://via.placeholder.com/300x200?text=JavaScript",
    logo: "https://via.placeholder.com/50x50?text=JS",
    title: "Introduction to JavaScript",
    creator: "John Doe",
  },
  {
    thumbnail: "https://via.placeholder.com/300x200?text=React",
    logo: "https://via.placeholder.com/50x50?text=React",
    title: "Advanced React Patterns",
    creator: "Jane Smith",
  },
  {
    thumbnail: "https://via.placeholder.com/300x200?text=Python",
    logo: "https://via.placeholder.com/50x50?text=Python",
    title: "Mastering Python",
    creator: "Alice Johnson",
  },
  {
    thumbnail: "https://via.placeholder.com/300x200?text=Data+Science",
    logo: "https://via.placeholder.com/50x50?text=R",
    title: "Data Science with R",
    creator: "Robert Brown",
  },
];
