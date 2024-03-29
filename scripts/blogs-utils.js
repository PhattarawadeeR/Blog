const blogElement = document.getElementById("blog-container");
let blogsRawData = [];
let loadingTimeout = {};

function createBlogHTML(blogs) {
  // วนแต่ละตัวของ blogs ด้วย .map เก็บไว้ที่ blogContentElement[] เพื่อทำการแปลงเป็น html ออกมา
  const blogContentElement = blogs
    .map(function (blog) {
      return `
        <div class="flex flex-col md:flex-row gap-6 w-full">
        <img
        src="${blog.imageURL}"
        alt="feature image 1"
        class="w-full md:w-auto"
        />
        <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
        <h3 class="text-2xl font-semibold">
            ${blog.title}
        </h3>
        <p class="text-xl font-light">
            ${blog.description}
        </p>
        <p>At ${blog.publishedDate}</p>
        <a href="${blog.url}">Read more</a>
        </div>
        </div>
    `;
    })
    .join("");

  // ต่อ html ทั้งหมดเพื่อใส่ใน blogElement.innerHTML
  blogElement.innerHTML = blogContentElement;
}

function searchBlogs(element) {
  // แสดง Loading ขึ้นมาสัก 2 วินาทีก่อนผลลัพธ์แสดงออกมา
  clearTimeout(loadingTimeout);

  blogElement.innerHTML = "Loading...";
  loadingTimeout = setTimeout(() => {
    const filteredBlogs = blogsRawData.filter(function (blog) {
      return blog.title.includes(element.value);
    });

    createBlogHTML(filteredBlogs);
  }, 2000);
}

function sortBlogs(element) {
  //   console.log(element.value);

  const sortedBlogs = blogsRawData.sort(function (blogA, blogB) {
    let compareDate =
      new Date(blogA.publishedDate) - new Date(blogB.publishedDate);

    if (element.value === "desc") {
      compareDate =
        new Date(blogB.publishedDate) - new Date(blogA.publishedDate);
    }
    return compareDate;
    // return new Date(blogA.publishedDate) - new Date(blogB.publishedDate);
  });
  createBlogHTML(sortedBlogs);
}

async function main() {
  const response = await axios.get("../scripts/blogs.json");
  blogsRawData = response.data;

  // ทำการนำ response.data ส่งเข้าไปใน crateBlogHTML เป็น array ของ blogs
  createBlogHTML(blogsRawData);
}

main();
