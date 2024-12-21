const blogPosts = [
  {
    title: "Cool Post",
    image: "./img/blog/images13.jpg",
    author: "Philip",
    date: "August 23, 2017",
    description:
      "In this post, we explore the latest trends in technology and design. We’ll show you how to incorporate these trends into your daily life. Keep reading for tips on improving your lifestyle with the latest innovations.",
    link: "#",
  },
  {
    title: "Simple Post",
    image: "./img/blog/full-4-600x375.jpg",
    author: "Philip",
    date: "August 22, 2017",
    description:
      "This simple post discusses easy yet effective ways to improve your everyday life. Learn how to tackle daily challenges in a straightforward and practical way, and how to better organize your time for a balance between work and personal life.",
    link: "#",
  },
  {
    title: "Gallery Post",
    image: "./img/blog/images04.jpg",
    author: "Philip",
    date: "August 22, 2017",
    description:
      "This gallery post features a collection of stunning images from various places around the world. Dive into the stories behind these beautiful moments captured at the perfect time.",
    link: "#",
  },
  {
    title: "Basic Post",
    image: "./img/blog/images05.jpg",
    author: "Philip",
    date: "August 23, 2017",
    description:
      "This post covers the basics of building good habits. We’ll discuss how to start with simple habits that can improve both your mental and physical health. If you're looking for practical tips on incorporating these habits into your daily routine, this post is a great place to start.",
    link: "#",
  },
];

const blogContainer = document.getElementById("BlugContainer");
const Search = document.getElementById("Search");

// Function to display a single blog post
function displayBlog(blog) {
  const blogHTML = `
    <div class="card">
      <div class="inner">
        <a href="${blog.link}">
          <img src="${blog.image}" alt="${blog.title}" class="card-image" />
        </a>
        <div class="card-content">
          <h4><a href="${blog.link}">${blog.title}</a></h4>
          <p class="p1">By <a href="#">${blog.author}</a> on ${blog.date}</p>
          <p class="p2">${blog.description}</p>
          <p class="p-after"><a href="${blog.link}">Read More</a></p>
        </div>
      </div>
    </div>
  `;
  blogContainer.innerHTML += blogHTML;
}

// Function to display all blog posts
function displayAllBlogPosts(posts) {
  blogContainer.innerHTML = "";
  posts.forEach((blog) => {
    displayBlog(blog);
  });
}

displayAllBlogPosts(blogPosts);

function filterBySearch() {
  const searchValue = Search.value.toLowerCase();
  const filteredPosts = blogPosts.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue)
  );
  displayAllBlogPosts(filteredPosts);
}

Search.addEventListener("input", filterBySearch);
