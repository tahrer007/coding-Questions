//leetcode : Game Play Analysis II
select l.player_id , l.device_id   FROM  logs l 
join (
SELECT distinct  player_id ,
Min(event_date) Over (Partition By player_id) as first
FROM logs
)t
on l.player_id = t.player_id and l.event_date = first 