select * ,
sum(game_played) Over (Partition By player_id order by event_date ) as first
 from logs 
