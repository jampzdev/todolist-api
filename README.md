SETUP

1. clone the project via HTTP/SSH or download the project as zip

2. access the file via terminal/cmd then type : npm install ( please make sure that there's a nodeJS installed on the machine)

3. store the database by executing db/database.sql on MySQL

4. run the project by typing node index.js


ROUTES
(all request are post method) please make sure the payload format must x-www-form-urlencoded)

{{url}}/todo/get
{
  page:1,
  row :10
}

{{url}}/todo/create
{
  title : "",
  description : ""
}

{{url}}/todo/update
{
  title : "",
  description : "",
  id :1
}

{{url}}/todo/remove
{
  id :1
}

