// everything in this file happens inside the window.on(load) function
// it runs when the rest of the window has been loaded
$(window).on('load', function() {
    // Create a popcporn instance by calling Popcorn("#id-of-the-media-element")
    // the "pop" object has the full power of the popcorn framework
    var pop = Popcorn("#media");

    //intro pick "stories of veteran suicide hotline"
    //these are their stories
    //stats on suicide hotliens
    //horrors of war and thier effects on soldiers
    //
    //PTSD slide
    //flashbacks and consequences
    //effects on family
    //not enough support for veterans for "treatment"
    //survivors guilt slide
    //

    pop.image({
        start: 0,
        end: 15,
        src:"http://www.thesleuthjournal.com/wp-content/uploads/2015/06/US-Military-Soldier-flag-background.jpg",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 0,
        end: 15,
        text: "Every year over 200,000 American Veterans return home to civilian life, many of which suffer from mental health problems such as PTSD, depression, and suicidal thoughts.\n\n",
        target: "popcorn-container"
    });

    pop.image({
        start: 5,
        end: 15,
        src:"http://www.battlefieldspost144.net/images/logos/veteran-crisis-line.jpg",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 5,
        end: 15,
        text: "\n\nThese are some stories from the people who work at the Veteran Crisis Hotlines that help veterans in their times of need.",
        target: "popcorn-container"
    });

    pop.image({
        start: 15,
        end: 25,
        src:"https://img.buzzfeed.com/buzzfeed-static/static/2015-03/16/11/enhanced/webdr01/enhanced-buzz-wide-21730-1426519683-7.jpg",
        target: "popcorn-container"
    });
    pop.image({
        start: 15,
        end: 25,
        src:"https://img.buzzfeed.com/buzzfeed-static/static/2015-03/16/11/enhanced/webdr07/enhanced-buzz-wide-8780-1426519592-20.jpg?no-auto",
        target: "popcorn-container"
    });
    pop.image({
        start: 25,
        end: 50,
        src:"http://i2.cdn.cnn.com/cnnnext/dam/assets/130919123908-suicide-frequency-story-top.jpg",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 25,
        end: 50,
        text: "Every day over 22 veterans commit suicide in the United States due to mental health problems caused by their time in service.",
        target: "popcorn-container"
    });
    pop.image({
        start: 35,
        end: 50,
        //src:"http://i2.cdn.cnn.com/cnnnext/dam/assets/130919123814-suicide-age-story-body.jpg",
        src:"media/age.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 35,
        end: 50,
        text: "Many are over the age of 50, mainly Vietnam veterans finding it harder and harder to continue living with the ghosts of their past.",
        target: "popcorn-container"
    });
    pop.image({
        start: 50,
        end: 66,
        //src:"http://i2.cdn.cnn.com/cnnnext/dam/assets/130919123624-suicide-rates-story-body.jpg",
        src: "media/thoughts.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 50,
        end: 66,
        text: "Many veterans live through their day to day lives while trying to cope with their mental health issues.",
        target: "popcorn-container"
    });
    pop.image({
        start: 55,
        end: 66,
        //src:"http://i2.cdn.cnn.com/cnnnext/dam/assets/130919123521-suicide-thoughts-story-body.jpg",
        src: "media/vVc.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 55,
        end: 66,
        text: "These mental health issues lead to suicide rates for veterans that are more than double those of civilians.",
        target: "popcorn-container"
    });
    // this uses the Wikipedia plugin
    pop.image({
        start: 66,
        end: 104,
        src:"http://healthjournal254.com/wp-content/uploads/2016/11/ptsd.jpg",
        target: "popcorn-container"
    });
    pop.wikipedia({
        src:"https://en.wikipedia.org/wiki/Posttraumatic_stress_disorder",
        start: 66,
        end: 104,
        text: "PTSD",
        target: "popcorn-container"
    });
    pop.image({
        start: 104,
        end: 135,
        src:"http://www.migrationpolicy.org/sites/default/files/source_images/SPT-Veterans-2016-F1.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 104,
        end: 135,
        text: "Despite a decrease in the total number of veterans living in the United States since the 90's and increased funding to the Veteran's Affairs Office, suicide rates have increased by 30.5% and 85.2% among male and female veterans respectively since 2001.",
        target: "popcorn-container"
    });
    pop.image({
        start: 110,
        end: 135,
        src:"media/VA.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 110,
        end: 135,
        text: "Support services provided by the Department of Veterans Affairs have become extremely important in helping prevent veteran suicides and for helping veterans start on a path to recovery.",
        target: "popcorn-container"
    });
    pop.image({
        start: 135,
        end: 160,
        src:"media/SG.png",
        target: "popcorn-container"
    });
    pop.wikipedia({
        src:"https://en.wikipedia.org/wiki/Survivor_guilt",
        start: 135,
        end: 160,
        text: "survivor's Guilt",
        target: "popcorn-container"
    });
    pop.image({
        start: 160,
        href: "https://www.veteranscrisisline.net/BeThere.aspx",
        src:"https://www.veteranscrisisline.net/spm2016/images/spm16_bethere_poster_sm_2017.png",
        target: "popcorn-container"
    });
    pop.footnote({
        start: 160,
        text: "If you know any veterans who may be suffering from mental health issues, please click on the picture above to learn about how you can help them.",
        target: "popcorn-container"
    });
    // Change the above events to your satisfaction, and then add your own events here, before
    // the final brackets.
    // full documentation of all the Popcorn plugins is here:
    // http://popcornjs.org/popcorn-docs/plugins/
});
