
# climate news api 

get climate news from famous online newspaper 
( guardian , thetimes , telegraph)

## https://climate-web-scraper.herokuapp.com

#### you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)


#### Get all data

```diff
  axios
  .get("https://climate-web-scraper.herokuapp.com/api/news")
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```


#### Get one newspaper news

```diff
  axios
  .get(`https://climate-web-scraper.herokuapp.com/api/news/${id}`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

| Parameter | value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `guardian` | **Required**. Id of item to fetch |
| `id`      | `thetimes` | **Required**. Id of item to fetch |
| `id`      | `telegraph` | **Required**. Id of item to fetch |


#### Example

```diff
  axios
  .get("https://climate-web-scraper.herokuapp.com/api/news/guardian")
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

