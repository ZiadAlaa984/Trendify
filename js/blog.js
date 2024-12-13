const blogPosts = [
  {
    title: "Cool Post",
    image: "./img/blog/images13.jpg",
    author: "Philip",
    date: "August 23, 2017",
    description:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    link: "#",
  },
  {
    title: "Simple Post",
    image: "./img/blog/full-4-600x375.jpg",
    author: "Philip",
    date: "August 22, 2017",
    description:
      "uis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    link: "#",
  },
  {
    title: "Gallery Post",
    image: "./img/blog/images04.jpg",
    author: "Philip",
    date: "August 22, 2017",
    description:
      "uis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
    link: "#",
  },
  {
    title: "Basic Post",
    image: "./img/blog/images05.jpg",
    author: "Philip",
    date: "August 23, 2017",
    description:
      "uis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros...",
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
