INSERT INTO enterprise (id_enterprise, enterprise_name, manager_name, manager_surname, id_user_roll_enterprise)
values (1, "SFD", "Luciana", "Gotusso", 2 ), (2, "FDS", "Santiago", "Garcia", 2), (3, "tickers", "Lucio", "Acosta", 2 ), (4, "Salestickes", "Marcela", "Gavilán", 2 ),
(5, "TicketsMundial", "Sofia", "Vacca", 2 ), (6, "TicketSinOferta", "Liliana", "Rojas", 2 );

INSERT INTO user_roll (id_user_roll, user_roll)
values (1, "Buyer"), (2, "Seller");

INSERT INTO tickets (id_tickets, name_event, description, discount, date_event, hour_event)
values (1, "Justin Bieber","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "15%", 12/02/2023, "15:30"), 
(2,"Dua Lipa","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", null, 13/03/2023, "19:30"), 
(3, "Harry Styles","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "30%", 11/11/2022, "20:00"),
(4, "Ariana Grande","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", null, 24/08/2023, "21:30"),
(5, "The strokes","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", null, 15/03/2023, "19:00"),
(6, "Rosalia","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "20%", 20/08/2024, "17:00"),
(7, "Red Hot Chilli Peppers","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", null, 23/02/2023, "16:30"), 
(8, "Perfume","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "15%", 11/02/2023, "19:30"), 
(9, "DIIV","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", null, 24/05/2022, "15:30"), 
(10, "Blurr","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "20%", 30/06/2024, "18:30"), 
(11, "Miranda","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua.", "30%", 10/01/2024, "15:30");

