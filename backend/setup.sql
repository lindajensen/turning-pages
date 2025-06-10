DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS reviews;

CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  description TEXT NOT NULL,
  quote TEXT,
  cover TEXT,
  genres TEXT NOT NULL,
  publication_date TEXT,
  rating REAL NOT NULL,
  pages INTEGER NOT NULL,
  isbn TEXT
);

INSERT INTO books (title, author, description, quote, cover, genres, publication_date, rating, pages, isbn) VALUES
("To Kill a Mockingbird", "Harper Lee", "To Kill a Mockingbird is a powerful story set in the 1930s American South, exploring themes of racism and justice. The novel follows Scout Finch, a young girl growing up in the small town of Maycomb, Alabama, with her father, Atticus Finch, a lawyer. When Atticus defends Tom Robinson, a black man falsely accused of raping a white woman, the community faces a moral reckoning. Through Scouts perspective, the book addresses prejudice, innocence, and courage, offering a poignant reflection on the social injustices of the time. It remains a timeless exploration of human compassion and the fight for whats right.", "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.", "to-kill-a-mockingbird.webp", "Fiction Classic", "11 July 1960", 4.26, 323, "978-0099549482"),

("1984", "George Orwell", "1984 is a dystopian novel written by George Orwell, set in a totalitarian society where the government, led by the omnipresent figure 'Big Brother', controls every aspect of citizens' lives. Through constant surveillance and propaganda, the state forces people to conform to its will, denying them personal freedom and privacy. The protagonist, Winston Smith, works for the government but begins to question the oppressive regime and seeks freedom in a world dominated by manipulation and repression. Published in 1949, 1984 serves as a powerful warning against totalitarianism and state control.", "Who controls the past controls the future. Who controls the present controls the past.", "1984.webp", "Dystopian Science-Fiction", "8 June 1949", 4.2, 368, "978-0141036144"),

("Pride and Prejudice", "Jane Austen", "Pride and Prejudice by Jane Austen is a classic novel set in early 19th-century England, focusing on the relationship between the strong-willed Elizabeth Bennet and the aloof Mr. Darcy. The story explores themes of love, social class, and personal growth, with both characters overcoming their prejudices and misunderstandings. Austens sharp wit and commentary on societal norms make this a timeless tale about the complexities of love, family, and reputation, still resonating with readers today.", "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", "pride-and-prejudice.webp", "Romance Classic", "28 January 1813", 4.29, 400, "978-0486284736"),

("The Great Gatsby", "F. Scott Fitzgerald", "The Great Gatsby by F. Scott Fitzgerald is a masterpiece of American literature set in the Roaring Twenties. The story revolves around Nick Carraway, who observes the life of his enigmatic neighbor, Jay Gatsby, a wealthy and mysterious man with an obsessive love for Daisy Buchanan. The novel explores themes of ambition, love, wealth, and the American Dream, highlighting the superficiality and decay beneath the glittering facade of the Jazz Age. Its tragic ending serves as a powerful critique of the pursuit of happiness through materialism and unattainable ideals.", "I wasn't actually in love, but I felt a sort of tender curiosity.", "the-great-gatsby.webp", "Fiction Classic", "10 April 1925", 3.93, 180, "978-1853260414"),

("The Hobbit", "J.R.R. Tolkien", "The Hobbit by J.R.R. Tolkien is a classic fantasy adventure novel that follows the journey of Bilbo Baggins, a humble hobbit who is thrust into an epic quest with a group of dwarves. Their mission is to reclaim the lost Kingdom of Erebor from the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and a mysterious creature named Gollum. Through courage, wit, and determination, Bilbo grows from a reluctant adventurer into a hero. This enchanting tale of bravery, friendship, and self-discovery is a precursor to Tolkiens larger Lord of the Rings saga.", "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.", "the-hobbit.webp", "Fantasy Adventure", "21 September 1937", 4.29, 366, "978-0007458424"),

("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Harry Potter and the Sorcerers Stone by J.K. Rowling introduces readers to Harry Potter, a young boy who discovers on his 11th birthday that he is a wizard. Harry is taken to Hogwarts School of Witchcraft and Wizardry, where he befriends Ron Weasley and Hermione Granger. The trio soon uncovers the mystery of the Sorcerer's Stone, a magical object with the power to grant immortality. As Harry navigates his new world, he confronts challenges and discovers his connection to the dark wizard Voldemort, setting the stage for the epic battles that lie ahead.", "It does not do to dwell on dreams and forget to live.", "harry-potter-and-the-sorcerers-stone.webp", "Fantasy Young-Adult", "26 June 1997", 4.47, 333, "978-0590353427"),

("The Hunger Games", "Suzanne Collins", "The Hunger Games by Suzanne Collins is set in a dystopian future where the nation of Panem is divided into 12 districts and ruled by the Capitol. Every year, one boy and one girl from each district are selected to participate in a televised event known as the Hunger Games, a brutal fight to the death. Katniss Everdeen, from District 12, volunteers to take her sisters place in the games. As she navigates the deadly arena, Katniss must balance survival and strategy while grappling with the pressure of becoming a symbol of rebellion against the Capitol.", "You don't forget the face of the person who was your last hope.", "the-hunger-games.webp", "Dystopian Science-Fiction", "14 September 2008", 4.34, 374, "978-0439023528"),

("The Fault in Our Stars", "John Green", "The Fault in Our Stars by John Green is a poignant love story about two teenagers, Hazel Grace Lancaster and Augustus Waters, who meet at a cancer support group. Hazel, battling terminal cancer, is reluctant to form close relationships, but Augustus changes that. Together, they embark on an emotional journey, exploring love, loss, and the meaning of life. As they face the realities of their illness, they learn to cherish their time together and the small but significant moments of happiness. This heartfelt novel examines the complexities of life and death and the profound impact of love.", "You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.", "the-fault-in-our-stars.webp", "Young-Adult Romance", "10 January 2012", 4.13, 313, "978-0141345659"),

("A Game of Thrones", "George R.R. Martin", "A Game of Thrones by George R.R. Martin is the first book in the epic fantasy series A Song of Ice and Fire. Set in the Seven Kingdoms of Westeros, it introduces a sprawling cast of characters, each vying for power as political intrigue, war, and betrayal threaten the realm. The novel weaves complex narratives across multiple families, with noble houses, kings, and warriors all contending for the Iron Throne. With themes of loyalty, honor, and the brutal cost of ambition, A Game of Thrones sets the stage for a violent struggle for the throne and survival.", "Winter is coming.", "a-game-of-thrones.webp", "Fantasy Epic", "6 August 1996", 4.45, 835, "978-0553573404"),

("The Book Theif", "Markus Zusak", "The Book Thief by Markus Zusak is a poignant novel set in Nazi Germany, narrated by Death. It tells the story of Liesel Meminger, a young girl who is sent to live with foster parents in the small town of Molching. Amid the horrors of war, Liesel steals books and shares them with her neighbors and the Jewish man hiding in her basement. The novel explores themes of loss, love, and the power of words. With rich prose and an unforgettable cast of characters, The Book Thief is a powerful tribute to human resilience and the importance of storytelling.", "Like most misery, it started with apparent happiness.", "the-book-theif.webp", "Historical-Fiction Drama", "1 September 2005", 4.39, 584, "978-0375842207"),

("Moby Dick", "Herman Melville", "Published in 1851, Moby Dick is a complex and deeply philosophical novel that follows Captain Ahabs obsessive quest to hunt the great white whale, Moby Dick. Narrated by Ishmael, a sailor aboard Ahabs ship, the Pequod, the novel explores themes of revenge, fate, and the nature of humanity. Through Ahabs relentless pursuit of the whale, Melville delves into profound questions about existence, obsession, and the power of nature. Moby Dick is a towering work of American literature, known for its symbolic richness and timeless exploration of the human condition.", "I know not all that may be coming, but be it what it will, I'll go to it laughing.", "moby-dick.webp", "Adventure Philosophical-Fiction", "18 October 1851", 3.56, 720, "978-9187193170"),

("War and Peace", "Leo Tolstoy", "War and Peace by Leo Tolstoy is a monumental work of literature, set against the backdrop of the Napoleonic Wars. The novel follows the lives of several aristocratic families, primarily the Bezukhovs, Bolkonskys, and Rostovs, as they navigate love, loss, and war. Through the experiences of characters like Pierre Bezukhov, Andrei Bolkonsky, and Natasha Rostova, Tolstoy explores profound themes of human nature, fate, and the impact of history on individuals. This epic narrative blends historical events with deep philosophical reflections, making it a timeless exploration of life and society.", "We can know only that we know nothing. And that is the highest degree of human wisdom.", "war-and-peace.webp", "Historical-Fiction, War-Fiction Philosophical-Fiction", "1 January 1869", 4.16, 1392, "978-1400079988"),

("The Catcher in the Rye", "J.D. Salinger", "The Catcher in the Rye by J.D. Salinger is a classic novel that explores the life of Holden Caulfield, a disenchanted teenager who is struggling to make sense of the adult world. After being expelled from prep school, Holden roams New York City, reflecting on his feelings of alienation, his fear of growing up, and his desire to protect the innocence of children. Salingers novel delves into themes of isolation, identity, and the complexities of adolescence, making it a timeless exploration of the challenges of growing up in a world that seems phony and confusing.", "I am always saying 'Glad to've met you' to somebody I'm not at all glad I met. If you want to stay alive, you have to say that stuff, though.", "the-catcher-in-the-rye.webp", "Coming-of-Age Literary-Fiction", "16 July 1951", 3.8, 277, "978-0316769488"),

("The Fellowship of the Ring", "J.R.R. Tolkien", "The Fellowship of the Rings is an epic high-fantasy trilogy by J.R.R. Tolkien that follows the journey of Frodo Baggins, a young hobbit who must destroy the One Ring, an object of immense power that could bring darkness and evil to the world. Alongside a group of companions, including Aragorn, Legolas, and Gandalf, Frodo embarks on a perilous quest to Mount Doom. The series explores themes of friendship, bravery, and the battle between good and evil. With rich world-building, memorable characters, and a timeless story, The Lord of the Rings is a cornerstone of fantasy literature.",  "Not all those who wander are lost.", "the-fellowship-of-the-ring.webp", "Fantasy Adventure", "29 July 1954", 4.4, 432, "978-0618640157"),

("The Chronicles of Narnia", "C.S. Lewis", "The Chronicles of Narnia is a series of seven high-fantasy novels by C.S. Lewis. The series follows the adventures of children who are transported to the magical land of Narnia, where they encounter talking animals, mythical creatures, and a battle between good and evil. The central figures include Aslan, the noble lion and true ruler of Narnia, and the Pevensie siblings, who play pivotal roles in the fate of the realm. The series explores themes of sacrifice, bravery, and the triumph of good over evil, and it has captivated readers of all ages since its publication.", "Peter did not feel very brave; indeed, he felt he was going to be sick. But that made no difference to what he had to do.", "the-chronicles-of-narnia.webp", "Fantasy Adventure Children's-Literature", "1 January 1956", 4.28, 767, "978-0064409421"),

("Brave New World", "Aldous Huxley", "Brave New World is a dystopian novel by Aldous Huxley, set in a futuristic society that values conformity, pleasure, and stability over individuality. In this world, people are conditioned to accept their roles through technology and genetic engineering, with no space for emotions, relationships, or creativity. The story follows Bernard Marx and Lenina Crowne as they question the societys norms and discover the consequences of a life devoid of true freedom and meaning. Huxleys exploration of totalitarianism, consumerism, and the loss of humanity remains profoundly relevant today.", "Words can be like X-rays if you use them properly - they'll go through anything. You read and you're pierced.", "brave-new-world.webp", "Dystopian Science-Fiction", "1 January 1932", 3.99, 268, "978-0060850524"),

("The Alchemist", "Paulo Coelho", "The Alchemist by Paulo Coelho is a philosophical novel that follows Santiago, a young shepherd on a journey to discover his personal legend and fulfill his dreams. Along the way, he encounters a series of characters who help him understand the importance of following one's heart and listening to the wisdom of the world. This enchanting tale is a reflection on destiny, the pursuit of happiness, and the power of believing in ones own dreams. Coelhos simple yet profound storytelling makes this novel a timeless inspirational read.", "And, when you want something, all the universe conspires in helping you to achieve it.", "the-alchemist.webp", "Philosophical-Fiction Adventure", "1 May 1988", 3.92, 182, "978-0062315007"),

("The Shining", "Stephen King", "The Shining is a psychological horror novel by Stephen King, set in the remote Overlook Hotel, where Jack Torrance, an aspiring writer, takes a winter caretaker job with his family. As the hotels isolation and eerie past begin to affect Jacks sanity, his wife Wendy and son Danny struggle to survive the terrifying forces that threaten their lives. With its eerie atmosphere and chilling sense of dread, The Shining is a masterclass in building suspense and exploring the psychological fragility of its characters.", "Sometimes human places, create inhuman monsters.", "the-shining.webp", "Horror Psychological-Thriller", "28 January 1977", 4.28, 497, "978-0307743657"),

("The Girl on the Train", "Paula Hawkins", "The Girl on the Train is a psychological thriller by Paula Hawkins, revolving around Rachel, an alcoholic woman who rides the train every day, passing by the house where she once lived with her ex-husband. One day, she sees a couple in the house next door, and when the woman goes missing, Rachel becomes entangled in the investigation. The novel is told from the perspectives of three women, weaving a complex tale of obsession, betrayal, and unreliable memories, with twists that keep readers on edge until the very end.", "I have never understood how people can blithely disregard the damage they do by following their hearts.", "the-girl-on-the-train.webp", "Thriller Mystery", "13 January 2015", 3.96, 336, "978-1594633669"),

("The Da Vinci Code", "Dan Brown", "The Da Vinci Code is a fast-paced thriller by Dan Brown that follows Harvard symbologist Robert Langdon as he investigates the murder of a curator at the Louvre. As he delves deeper into the mystery, Langdon uncovers a trail of clues that lead him to a secret society and a shocking conspiracy involving the Catholic Church. With themes of religion, history, and art, The Da Vinci Code is a riveting puzzle of intrigue, secrets, and thrilling adventure.", "Men go to far greater lengths to avoid what they fear than to obtain what they desire.", "the-da-vinci-code.webp", "Thriller Mystery Adventure", "18 March 2003", 3.93, 480, "978-0307474278"),

("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "The Hitchhiker's Guide to the Galaxy is a hilarious and absurd sci-fi adventure following Arthur Dent, an ordinary Englishman who is whisked away into space just before Earth is destroyed to make way for a hyperspace bypass. With the help of his alien friend Ford Prefect, two-headed galactic president Zaphod Beeblebrox, and Marvin the paranoid android, Arthur embarks on a wild journey through the universe, learning that the answer to life, the universe, and everything is, in fact, 42.", "Don't panic.", "the-hitchhikers-guide-to-the-galaxy.webp", "Science-Fiction Humor Adventure", "12 October 1979", 4.22, 216, "978-0345391803"),

("Little Women", "Louisa May Alcott","Little Women is a classic coming-of-age novel that follows the lives of the four March sisters - Meg, Jo, Beth, and Amy - as they navigate the trials and joys of childhood, adolescence, and adulthood. Set during the American Civil War, the novel is an enduring story about family, love, loss, and the pursuit of one's dreams.", "I am not afraid of storms, for I am learning how to sail my ship.", "little-women.webp", "Classic, Fiction, Historical-Fiction", "30 September 1868", 4.16, 449, "978-1503280293"),

("Dracula", "Bram Stoker", "Dracula is a gothic horror novel that tells the story of Count Dracula's attempt to move from Transylvania to England in order to spread the undead curse. Through letters, diaries, newspaper clippings, and a series of chilling events, the novel follows the attempts of a group of people to stop Dracula's reign of terror. Themes of superstition, sexuality, and the Victorian fear of the unknown are explored.", "We learn from failure, not from success!", "dracula.webp", "Horror Gothic Classic", "26 May 1897", 4.02, 488, "978-0486434022"),

("Frankenstein", "Mary Shelley", "Frankenstein is the tale of Victor Frankenstein, a scientist who creates a living being from dead tissue. As his monster comes to life, it becomes a being capable of immense pain and suffering. Shelley's novel explores themes of creation, responsibility, and the consequences of blind ambition, and is often considered one of the earliest works of science fiction.", "Nothing is so painful to the human mind as a great and sudden change.", "frankenstein.webp", "Science-Fiction Gothic Classic", "1 January 1818", 3.88, 260, "978-0486282114"),

("Crime and Punishment", "Fyodor Dostoevsky", "Crime and Punishment is a psychological novel set in St. Petersburg, Russia. It follows the troubled Raskolnikov, a young student who plans and executes the murder of a pawnbroker in order to use the stolen money to improve his life. However, guilt and paranoia soon overwhelm him, and he wrestles with his conscience and the moral implications of his crime.", "To go wrong in one's own way is better than to go right in someone else's.", "crime-and-punishment.webp", "Classic Philosophical-Fiction Psychological-Fiction", "1 January 1866", 4.28, 671, "978-0140449136"),

("The Road", "Cormac McCarthy", "The Road is a bleak and haunting novel set in a post-apocalyptic world where a father and son travel across a desolate landscape, struggling to survive amidst the remnants of civilization. As they journey through this grim world, the bond between them grows stronger, and they hold on to the hope of a better future despite the overwhelming despair around them.", "You forget what you want to remember, and you remember what you want to forget.", "the-road.webp", "Post-Apocalyptic Literary-Fiction", "26 September 2006", 3.99, 241, "978-0307387899"),

("The Outsiders", "S.E. Hinton", "The Outsiders is a seminal work of young adult fiction that explores the tensions between two social groups — the Greasers and the Socs — in 1960s America. The story follows Ponyboy Curtis, a Greaser, as he navigates issues of class, violence, and identity. The novel deals with themes of loyalty, friendship, and the struggle to understand one's place in a divided society.", "I lie to myself all the time. But I never believe me.", "the-outsiders.webp", "Young-Adult Fiction Classic", "24 April 1967", 4.14, 214, "978-0142407332"),

("Catch-22", "Joseph Heller", "Catch-22 is a satirical novel set during World War II that follows Captain John Yossarian, a U.S. Army Air Force bombardier, as he struggles to survive the absurdities of war. The novel's title refers to the concept of a Catch-22, a no-win situation where one cannot escape a predicament due to contradictory rules. It is a sharp critique of bureaucracy, war, and the human condition.", "He was going to live forever, or die in the attempt.", "catch-22.webp", "Satire War-Fiction Literary-Fiction", "10 November 1961", 3.99, 453, "978-1451626650");

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  book_id INTEGER,
  user TEXT,
  text TEXT,
  FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO reviews (book_id, user, text) VALUES
-- To Kill a Mockingbird
(1, "BookLover22", "A powerful novel that challenges readers to reflect on their own biases and the importance of justice."),
(1, "LitFan87", "A gripping story that teaches valuable lessons about empathy, integrity, and standing up for whats right."),
(1, "ReadingAddict", "A thought-provoking classic that explores morality, racism, and the courage to fight for justice."),

-- 1984
(2, "DystopiaFan23", "A chilling portrayal of a totalitarian regime that makes you question the value of freedom and the dangers of government control."),
(2, "OrwellianReader", "An unsettling yet captivating read that forces us to confront the terrifying consequences of absolute power and surveillance."),
(2, "FutureThinker", "A masterful work of literature that remains relevant in today's world, highlighting the dangers of losing individual rights to a faceless government."),

-- Pride and Prejudice
(3, "ClassicsLover", "A delightful exploration of love, manners, and the complexity of human nature, with characters who stay with you long after the book ends."),
(3, "BookishKate", "A wonderfully sharp and witty novel that highlights the flaws in societal expectations while portraying a beautiful love story between two unforgettable characters."),
(3, "HistoricalReader", "An insightful portrayal of social class and relationships, filled with humor and memorable characters, making it a timeless classic in English literature."),

-- The Great Gatsby
(4, "JazzAgeFan", "A hauntingly beautiful exploration of love and disillusionment in a world obsessed with wealth and status. Gatsbys tragic pursuit of Daisy leaves a lasting impression."),
(4, "LitLover93", "Fitzgeralds portrayal of the American Dream is both captivating and tragic. A timeless story that brilliantly captures the essence of 1920s decadence and the pursuit of unattainable ideals."),
(4, "BookWorm123", "A masterpiece of literature that examines the emptiness behind the allure of wealth, fame, and love. The Great Gatsby is as relevant today as it was when it was first published."),

-- The Hobbit
(5, "FantasyFan87", "An unforgettable adventure that transports readers into a magical world full of danger, friendship, and self-discovery. Bilbos journey is truly inspiring."),
(5, "BookLover21", "A charming and delightful tale that combines rich world-building with memorable characters. The Hobbit is a must-read for fans of fantasy literature."),
(5, "AdventureSeeker22", "A timeless adventure that proves even the smallest person can change the course of the future. Tolkiens world-building is exceptional, and Bilbos growth is inspiring."),

-- Harry Potter and the Sorcerer's Stone
(6, "WitchcraftFan123", "An enchanting start to the Harry Potter series. A magical journey filled with mystery, friendship, and adventure that captures the heart of readers young and old."),
(6, "BookWorm29", "A classic that transports you into a world of wonder and excitement. The characters are lovable, and the plot keeps you hooked from start to finish!"),
(6, "MagicLover88", "A thrilling adventure that blends magic, mystery, and heart. Harrys journey at Hogwarts is one of the most captivating tales in modern fantasy literature."),

-- The Hunger Games
(7, "DystopiaFan99", "A gripping and thrilling story about survival, courage, and defiance. Katniss is an inspiring heroine, and the intense action keeps you on the edge of your seat."),
(7, "BookishDreamer", "A powerful and thought-provoking tale that raises important questions about society, control, and sacrifice. Its a must-read for fans of dystopian fiction."),
(7, "PageTurner42", "An unforgettable journey through a brutal world where every choice has consequences. The Hunger Games is a captivating and emotionally charged story thats hard to put down."),

-- The Fault in Our Stars
(8, "HeartfeltReader", "A beautifully written and emotionally powerful story that explores love, loss, and hope. Hazel and Augustus journey will stay with you long after you turn the last page."),
(8, "LiteraryLover", "An incredible novel that is both heartbreaking and uplifting. John Green captures the struggles and beauty of life in such a relatable and honest way. A must-read!"),
(8, "BookWorm21", "A deeply moving and thought-provoking book. Its an unforgettable story about love and lifes fleeting nature, with characters that feel real and a plot that tugs at your heart."),

-- A Game of Thrones
(9, "FantasyFanatic", "A captivating and intricately woven story filled with complex characters and unexpected twists. Martins world-building is extraordinary, and the plot is full of intrigue, danger, and suspense."),
(9, "BookishAdventurer", "A breathtaking start to an epic series. The characters are morally grey, the politics are intricate, and the world-building is unmatched. A thrilling ride that leaves you wanting more."),
(9, "EpicStoryTeller", "A masterful blend of fantasy and political drama. The plot is rich with action, and the stakes are high. A must-read for fans of dark fantasy and complex narratives."),

-- The Book Thief
(10, "BookWorm79", "An emotionally charged and beautifully written story that will stay with you long after the last page. Zusak's use of Death as the narrator adds a unique and thought-provoking perspective to the story."),
(10, "LiteraryLover", "A hauntingly beautiful tale of love, loss, and the resilience of the human spirit. Liesel's journey is heartbreaking yet inspiring, and the writing is nothing short of poetic."),
(10, "HistoryBuff", "A deeply moving narrative set against the backdrop of World War II. The Book Thief is an unforgettable exploration of the power of books and how they can shape and preserve lives in times of darkness."),

-- Moby Dick
(11, "ClassicLover23", "A timeless masterpiece, Moby Dick captivates with its rich symbolism and philosophical depth. The complex relationship between Ahab and the whale is both a metaphor for obsession and an exploration of the human spirit."),
(11, "LiteratureFanatic", "While the novel can be dense and philosophical at times, Moby Dick offers a profound exploration of man's struggle against nature, fate, and the pursuit of meaning. A true classic in every sense."),
(11, "BookExplorer42", "A remarkable adventure that goes beyond a simple sea tale. Melvilles exploration of obsession and the destructive power of vengeance is haunting, and Ishmaels narrative voice makes this novel as engaging as it is thought-provoking."),

-- War and Peace
(12, "EpicReader92", "War and Peace is an extraordinary epic that delves into the complexities of human relationships, war, and the sweeping forces of history. Tolstoys rich characters and philosophical musings make it an unforgettable read."),
(12, "HistoryLover87", "Tolstoy masterfully weaves together historical events and personal dramas, creating a vast, intricate narrative that provides profound insights into life, love, and the effect of war on humanity."),
(12, "BookJunkie56", "A monumental work that explores the full spectrum of human experience. Tolstoys examination of destiny, morality, and the interplay between personal lives and historical events makes War and Peace one of the greatest novels ever written."),

-- The Catcher in the Rye
(13, "TeenReader101", "A raw and honest portrayal of teenage angst and the struggle to find one's place in the world. Holdens voice is unforgettable, and Salinger captures the complexity of growing up perfectly."),
(13, "BookLover22", "A deeply introspective novel that resonates with anyone who has ever felt lost or out of place. Holdens journey is both heartbreaking and enlightening, and it speaks to the universal search for meaning and identity."),
(13, "LiteraryFan", "A compelling, thought-provoking read that tackles the confusion and disillusionment of adolescence. Holdens narrative is full of wit and bitterness, making it an unforgettable and impactful experience."),

-- The Fellowship of the Ring
(14, "EpicReader01", "A breathtaking and immersive journey that takes you into the heart of Middle-earth. Tolkiens world-building is unparalleled, and the depth of the characters makes this an unforgettable fantasy adventure."),
(14, "FantasyFanatic", "An incredible tale of heroism and friendship, with a richly detailed world that pulls you in from the very first page. The Lord of the Rings is a must-read for any fan of fantasy."),
(14, "BookExplorer", "A masterpiece of storytelling, full of wisdom and heart. Tolkien creates a world that is both fantastical and deeply human, and the themes of good versus evil resonate powerfully throughout the trilogy."),

-- The Chronicles of Narnia
(15, "FantasyDreamer", "A magical and timeless series that transports readers to an enchanting world of adventure and wonder. Lewiss storytelling is both captivating and thought-provoking, making it a beloved classic."),
(15, "BookLover01", "A brilliant series that mixes imagination with profound life lessons. The Chronicles of Narnia teaches important values about courage, friendship, and the eternal struggle between good and evil."),
(15, "AdventurousReader", "An epic journey into a fantastical world that never loses its charm. The characters are endearing, and the moral lessons resonate deeply. Its a series for all ages to enjoy and reflect on."),

-- Brave New World
(16, "SciFiFan88", "A chilling look at a future society that prioritizes happiness and control over freedom and individuality. Huxley's insights into human nature and social engineering are still relevant and deeply thought-provoking."),
(16, "BookExplorer", "A dystopian masterpiece that questions the price of happiness and the sacrifices made in the name of stability. Huxleys writing is as sharp as ever, making Brave New World an essential read for those interested in the dangers of unchecked technological power."),
(16, "LiteraryCritic", "Huxleys Brave New World presents a chilling vision of a future where free will is sacrificed for convenience. The novel raises important ethical questions about technology, individual rights, and the nature of happiness."),

-- The Alchemist
(17, "InspiringReader", "A beautiful and inspiring journey about following ones dreams and listening to the heart. Coelhos prose is simple yet powerful, offering timeless wisdom on life, love, and purpose."),
(17, "DreamSeeker", "An uplifting novel that encourages readers to pursue their passions and embrace their true path in life. The Alchemist is a story of self-discovery and the magic of realizing your own potential."),
(17, "PhilosophyFan", "A thought-provoking novel that blends adventure with deep spiritual insights. The Alchemist teaches that the journey itself is just as important as the destination."),

-- The Shining
(18, "HorrorLover", "A spine-tingling masterpiece from King that delves deep into the fragility of the human mind. The Shining is a terrifying tale of isolation and the supernatural, with one of the most iconic settings in horror literature."),
(18, "SuspenseSeeker", "A haunting novel that builds a sense of dread from start to finish. Kings writing is so immersive that you feel trapped within the Overlook Hotel alongside its characters. The Shining is a must-read for horror fans."),
(18, "ChillingReader", "A chilling psychological horror novel that gets under your skin. Kings exploration of madness, isolation, and the supernatural makes The Shining one of his finest works."),

-- The Girl on the Train
(19, "MysteryFan", "A psychological thriller with a twisty plot that keeps you guessing until the very end. Hawkins use of unreliable narrators makes this a gripping and unpredictable read."),
(19, "SuspenseLover", "A brilliant, dark, and twisty thriller that pulls you in from the first page. The Girl on the Train is an edge-of-your-seat ride full of suspense, lies, and betrayal."),
(19, "WhodunitReader", "An intense and gripping story full of twists and unreliable perspectives. Hawkins crafts a compelling narrative that delves into the complexities of memory, guilt, and obsession."),

-- The Da Vinci Code
(20, "ThrillerFan", "A fast-paced and gripping thriller that blends history, religion, and mystery into an exhilarating read. The Da Vinci Code keeps you on the edge of your seat with every twist and turn."),
(20, "CodeBreaker", "A clever, high-stakes thriller with mind-bending puzzles and thrilling revelations. Dan Browns writing is as engaging as it is thought-provoking, making this a must-read for fans of historical mysteries."),
(20, "MysteryBuff", "A compelling and intricate story that explores the secret world of religious history. The Da Vinci Code is an exhilarating ride through art, symbols, and conspiracy theories."),

-- The Hitchhiker's Guide to the Galaxy
(21, "SciFiLover", "A brilliantly absurd and witty journey through space. Douglas Adams' humor is unparalleled, making this book a must-read for sci-fi fans and comedy lovers alike."),
(21, "GalaxyTraveler", "The perfect blend of satire, adventure, and deep philosophical musings hidden beneath layers of humor. An unforgettable classic that never gets old."),
(21, "BookWorm42", "From talking dolphins to depressed robots, this book is a masterpiece of comedic science fiction. The writing is clever, entertaining, and endlessly quotable."),

-- Little Women
(22, "LiteraryLover", "A timeless story of sisterhood and personal growth. Little Women beautifully captures the joys and hardships of growing up, and the love that binds family together."),
(22, "FeministReader", "The March sisters are role models for perseverance, independence, and strength. This book offers wisdom that is just as relevant today as it was when it was first written."),
(22, "ClassicBookWorm", "An absolute masterpiece of classic literature. Little Women is filled with heart, humor, and a depth of emotion that transcends time."),

-- Dracula
(23, "GothicFan", "A classic of horror that blends atmosphere, terror, and mystery. Dracula is a book that will keep you on the edge of your seat, with its dark, gothic atmosphere and unforgettable characters."),
(23, "HorrorLover", "Bram Stoker's Dracula is the epitome of gothic horror. It's eerie, immersive, and terrifying. A must-read for fans of supernatural fiction."),
(23, "BookCritic", "A haunting and well-crafted novel that brings to life the fear and fascination surrounding the figure of Dracula. The book's dark themes and unforgettable imagery make it a standout in horror literature."),

-- Frankenstein
(24, "SciFiFan", "A fascinating exploration of the dangers of playing God. Frankenstein is a classic that blends science fiction with profound philosophical questions about humanity, ethics, and the price of ambition."),
(24, "GothicReader", "Frankenstein is a haunting tale that examines the darker side of human nature. The tragic story of the monster and its creator is a masterpiece of gothic literature."),
(24, "ClassicLover", "A timeless and thought-provoking novel. Shelley's Frankenstein is a story that transcends its time and is just as relevant today as it was when it was written."),

-- Crime and Punishment
(25, "PhilosophyReader", "A profound exploration of guilt, redemption, and the nature of crime. Dostoevsky's work is intellectually challenging but deeply rewarding for those who delve into the complexity of human nature."),
(25, "ClassicBookLover", "An intense and thought-provoking novel that examines the moral and psychological consequences of crime. It's an existential work that challenges readers to consider justice, punishment, and human suffering."),
(25, "LiteraryScholar", "Dostoevsky's insight into the human psyche is unparalleled. Crime and Punishment is a heavy read, but it's an essential part of world literature for anyone interested in philosophy and psychology."),

-- The Road
(26, "DystopianFan", "A haunting portrayal of survival, love, and the human spirit in the face of overwhelming desolation. McCarthy's sparse writing style makes the story all the more powerful."),
(26, "BookCritic", "The Road is an emotionally intense journey that explores the depths of human resilience and the bond between parent and child. It's a heartbreaking yet beautiful story of hope in a hopeless world."),
(26, "LiteraryLover", "A masterpiece of modern fiction. McCarthy's sparse, poetic writing creates a haunting atmosphere that lingers long after the book ends."),

-- The Outsiders
(27, "TeenReader", "A powerful coming-of-age story that captures the struggles of youth and the complexities of class and identity. The Outsiders is a classic that still resonates with readers today."),
(27, "BookLover78", "S.E. Hinton's portrayal of teenage life, with its struggles and triumphs, is poignant and impactful. The Outsiders is a must-read for anyone interested in the dynamics of friendship, family, and social class."),
(27, "LiteraryFan", "The Outsiders is a beautifully written novel about the difficulties of growing up and the choices we make that shape our future. It's timeless, relatable, and emotionally gripping."),

-- Catch-22
(28, "SatireLover", "Catch-22 is a brilliant satirical exploration of the madness of war and bureaucracy. Heller's dark humor and absurdity make this novel a powerful and thought-provoking read."),
(28, "LiteraryBuff", "A masterpiece of modern literature. Catch-22 is a complex and absurd narrative that delves into the contradictions of war and the human psyche. It's a must-read for anyone who loves satirical fiction."),
(28, "WarHistorian", "Catch-22 is a powerful anti-war novel that challenges the logic of conflict. Heller's portrayal of the absurdity of military life is both humorous and devastatingly poignant.");
