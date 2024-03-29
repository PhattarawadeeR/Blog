class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer class="flex flex-col text-white justify-center w-full px-8">
    <section class="flex justify-between">
      <div class="flex flex-col gap-6 w-2/6">
        <h3 class="font-bold text-[32px]">Jane Doe</h3>
        <p>
          Hello, beautiful passerby. I’m Jane Doe. A passionate photographer.
          I love to bla bla bla.... bla bla bla.... bla bla bla.... bla bla
          bla.... bla bla bla.... bla bla bla.... bla bla bla.... I’m
          available for hiring.
        </p>
        <form onsubmit="onSubmit(event)" class="flex flex-col gap-4">
          <input
            type="email"
            name="myEmail"
            placeholder="Enter your email"
            class="py-[14px] pl-4 w-full text-wd-black"
          />
          <button
            type="submit"
            class="bg-primary text-[#010101] px-[33px] py-3 w-1/2"
          >
            Subscribe <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
      <div class="flex flex-col gap-6 w-2/6">
        <h3 class="font-bold text-[32px]">Get in touch!</h3>
        <p>
          MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
          Bangkok 10330
        </p>
        <p>Email: tanapol@skooldio.com</p>
        <div class="flex gap-4">
          <i class="fa-brands fa-facebook fa-2xl text-wd-brand"></i>
          <i class="fa-brands fa-instagram fa-2xl text-wd-brand"></i>
          <i class="fa-brands fa-x-twitter fa-2xl text-wd-brand"></i>
        </div>
      </div>
    </section>

    <section>
      <p
        class="text-center font-bold border-t-[1px] border-primary py-12 mt-12"
      >
        © 2023, Jane Doe. All Rights Reserved.
      </p>
    </section>
  </footer>`;
  }
}

customElements.define("my-footer", MyFooter);
