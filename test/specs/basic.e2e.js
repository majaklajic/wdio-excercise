describe ("Testiranje Linear stranice", () => {
        //  it('Testiranje h1', async () => {
        //      await browser.url('https://linear.app/');
        //      const introductionParagraph = await $('p');
        //      await expect(introductionParagraph).toHaveText('Linear helps streamline software projects, sprints, tasks, and bug tracking. It’s built for high-performance teams.');

        //      await browser.pause(3000);
        //     })


            // it ('Testiranje navigacije pomoću opcije Method i otvaranje poveznice "Set useful goals"', async() => {
            //              await browser.url('https://linear.app/');
            //              const navigation = await $('a=Method');
            //              await navigation.click();
            //              const header = await $('h1');
            //              await expect(header).toHaveText('Linear Method');
            //              const linkOnDirection = await $('a=Set useful goals');
            //              await linkOnDirection.click();
            //              const back = await $('a=<- Back to Linear Method');
            //              await back.click();
            //              await expect(header).toHaveText('Linear Method');

            //              await browser.pause(3000);
            //          })

            // it ('Testiranje prijave', async() => {
            //                   await browser.url('https://linear.app/login');
            //                   const button = await $('button=Continue with email');
            //                   await button.click();
            //                   const inputTest = await $('input');
            //                   await expect(inputTest).toHaveAttr('placeholder');
            //                   await inputTest.addValue("boro17022@gmail.com");
            //                   await button.click();
            //                   const correctEmail = await $('span');
            //                   await expect(correctEmail).toHaveText('Check your email');
    
            //                   await browser.pause(3000);
            //               })
    


          it('Testiranje klika na sliku koja otvara unos na blogu', async () => {
              browser.setWindowSize(1500,1500);

              await browser.url('https://linear.app/blog');
              const blog = await $('[src="https://cdn.sanity.io/images/ornj730p/production/3d5ec414e949b80e6d7903760b722b0a63fb8bdf-2120x1212.png"]');
              await blog.click();
              const blogEntry = await $('h2');
              await expect(blogEntry).toHaveText('Fast growing startups are built on Linear');
              await browser.pause(2000);

            //   await expect(blog).toHaveText('Linear – 2021 Wrapped');
            //   const blogEntryImage = $('.PostCard__Thumb-sc-10dt7v1-1.hffIHG');
            //   await blogEntryImage.click();


            //   await browser.pause(3000);
             })


})
