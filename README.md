
# climate news api 

get climate news from famous online newspaper 
( guardian , thetimes , telegraph)

## https://climate-web-scraper.herokuapp.com

#### you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)


#### Get all data

```diff
  fetch("https://climate-web-scraper.herokuapp.com/api/news")
  .then((res) => res.json())
  .then((json) => console.log(json));
```


#### Get one newspaper news

```diff
   fetch("https://climate-web-scraper.herokuapp.com/api/news/{id}")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `guardian` | **Required**. Id of item to fetch |
| `id`      | `thetimes` | **Required**. Id of item to fetch |
| `id`      | `telegraph` | **Required**. Id of item to fetch |


#### Example

```diff
  fetch("https://climate-web-scraper.herokuapp.com/api/news/guardian")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

