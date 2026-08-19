let hobbies = [
    {
        name: "Drawing", mood: ["happy", "calm", "bored", "stressed"],
        description: "A creative hobby that lets you express yourself and relax.",
        img : "https://img.magnific.com/free-photo/close-up-artist-using-brush_1098-2209.jpg?semt=ais_test_b&w=740&q=80",
        benefits :"Creativity, relaxation and self-expression", need:"Paper, pencil or drawing apps",
        link :"https://www.adobe.com/eg_en/creativecloud/illustration/discover/learning-to-draw.html"
    },
    {
        name: "Photography", mood: ["happy", "curious", "bored"],
        description: "Explore your surroundings and learn to capture interesting moments.",
        img :"https://img.magnific.com/free-photo/photographers-exploring-abandoned-location_23-2150974366.jpg?semt=ais_hybrid&w=740&q=80",
        benefits :"Creativity, observation and exploring your surroundings ", need:"Camera or a phone",
        link :"https://www.adobe.com/eg_en/creativecloud/photography/basics.html"
    },
    {
        name: "Running", mood: ["energetic", "stressed"],
        description: "A simple outdoor activity that helps you stay active and clear your mind.",
        img :"https://hips.hearstapps.com/hmg-prod/images/868226bd-1882-4a7e-b5dd-3b7b36c7fba2.jpg?crop=0.666666666667xw:1xh;center,top&resize=1200:*",
        benefits :"Fitness, energy and stress relief", need:"Comfortable clothes",
        link :"https://www.runnersworld.com/uk/training/beginners/a772727/how-to-start-running-today/"
    },
    {
        name: "Yoga",mood: ["calm", "stressed", "tired"],
        description: "A relaxing activity that combines movement, breathing, and mindfulness.",
        img :"https://omsivayoga.com/wp-content/uploads/0x0-1.jpg",
        benefits :"Relaxation, flexability and body awareness", need:"Comfortable clothes and a yoga mat",
        link :"https://health.clevelandclinic.org/yoga-for-beginners"
    },
    {
        name: "Chess",mood: ["curious", "bored", "calm"],
        description: "A strategic game that challenges your mind and improves problem-solving.",
        img :"https://www.thesprucecrafts.com/thmb/7F787XGs9couW2bOcBorwj6KM0M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dv2015029-56a136155f9b58b7d0bd0d71.jpg",
        benefits :"Problem-solving, concentration and strategic", need:"Chess board or chess app",
        link :"https://www.chess.com/learn-how-to-play-chess"
    },
    {
        name: "Cooking", mood: ["happy", "bored" , "energetic"],
        description: "Experiment with ingredients and create something delicious.",
        img :"https://st2.depositphotos.com/1017986/6607/i/450/depositphotos_66076883-stock-photo-happy-friends-and-chef-cook.jpg",
        benefits :"Creativity, independence and life skill", need:"Kitchen tools and ingredients",
        link :"https://www.bbcgoodfood.com/"
    },
    {
        name: "Gardening", mood: ["calm", "stressed", "curious"],
        description: "Take care of plants and enjoy spending time with nature.",
        img :"https://img.magnific.com/free-photo/senior-couple-caring-flowers_23-2148256711.jpg?semt=ais_test_b&w=740&q=80",
        benefits :"Relaxation, patience and connection with nature", need:"Plants, soil, pots and gardening tools",
        link :"https://www.rhs.org.uk/advice/beginners-guide"
    },
    {
        name: "Journaling",mood: ["calm", "stressed", "curious"],
        description: "Write down your thoughts, ideas, and experiences.",
        img :"https://static.vecteezy.com/system/resources/thumbnails/074/414/007/small/a-notebook-pen-and-cup-of-tea-on-a-desk-photo.jpg",
        benefits :"Self-reflection, organization and creativity", need:"A notebook and a pen",
        link :"https://positivepsychology.com/how-to-start-journaling/"
    },
    {
        name :"Reading" , mood : ["calm" ,"curious" , "bored"],
        description :"Exploring books, novels, poetry, and ideas to discover new worlds and perspectives.",
        img :"https://images.unsplash.com/photo-1532294220147-279399e4e00f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMHJlYWRpbmd8ZW58MHx8MHx8fDA%3D",
        benefits :"Knowledge, imagination and concentration", need:"A book",
        link :"https://bookriot.com/how-to-start-reading/"
    },
    {
        name :"Fitness" , mood :["energetic" ,"happy" ,"stressed"],
        description :"Exercising through activities such as walking, running, swimming, or strength training.",
        img :"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/06/14/istock-500671490.jpg",
        benefits :"Strength, energy and physical fitness", need:"Comfortable clothes and enough space",
        link :"https://www.acefitness.org/resources/everyone/exercise-library/experience/beginner/?srsltid=AfmBOoo40umZ1dT_8kNOblOOWSUa9DImESXdm1LeuwgsQN9h7rcPBU4P"
    },
    {
        name: "Origami",mood : ["calm", "curious", "bored"],
        description: "Turn simple pieces of paper into animals, flowers, decorations, and useful objects.",
        img: "https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-a-woman-makes-some-colored-origami-paper-image_13176046.png",
        benefits: "Focus, patience, and creativity" ,need: "Paper",
        link: "https://origami.me/beginners-guide/"
    },
    {
        name: "Crochet",mood : ["calm", "bored", "happy"],
        description: "Create useful and decorative objects by working with yarn and a crochet hook.",
        img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/28/48859.jpg",
        benefits: "Creativity, patience, and relaxation",need: "Yarn and a crochet hook",
        link: "https://www.crochet.com/learning-center/beginner-getting-started?srsltid=AfmBOoo5hfoxFdqn2i70bBOwllmyQKNJmVz2fK-VvPv85N5tDX_zaMfr"
    },
    {
        name: "Calligraphy", mood : ["calm", "curious", "bored"],
        description: "Practice beautiful lettering and turn ordinary words into creative designs.",
        img: "https://images.pexels.com/photos/34136699/pexels-photo-34136699/free-photo-of-artisan-calligraphy-on-aged-paper.jpeg",
        benefits: "Focus, patience, and creativity", need: "Paper and a suitable pen",
        link: "https://www.lettering-daily.com/"
    },
    {
        name: "Creative Writing",mood : ["calm", "curious", "bored"],
        description: "Create stories, characters, poems, or anything you can imagine.",
        img: "https://i1.pickpik.com/photos/363/249/315/writing-writer-notes-pen-preview.jpg",
        benefits: "Creativity, imagination, and self-expression",need: "A notebook or computer",
        link: "https://reedsy.com/blog/guide/creative-writing/"
    },
    {
        name: "Cycling",mood : ["energetic", "happy", "bored"],
        description: "Explore your surroundings while getting active and enjoying time outdoors.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5uQRtgMpsd4S-NC6e8V5jV_-7pRbpLcSlVJx19JwCcPDfLhQ7q9F19E&s=10",
        benefits: "Fitness, energy, and exploring new places",need: "A bicycle and a helmet",
        link: "https://www.cyclinguk.org/advice/beginner-cycling"
    },
    {
        name: "Puzzles",mood : ["calm", "bored", "curious"],
        description: "Challenge yourself by solving jigsaw puzzles, logic puzzles, and brain teasers.",
        img: "https://www.shutterstock.com/image-photo/close-unrecognizable-family-playing-jigsaw-260nw-2215720427.jpg",
        benefits: "Concentration, patience, and problem-solving", need: "A puzzle or puzzle app",
        link: "https://www.puzzlewarehouse.com/blog/shaped-puzzle-strategy-for-beginners/?srsltid=AfmBOoqDgP3S4GHy58C4zqicnP9ngaYOJoajw3XMSoYZucvBScz4rEPS"
    }
];