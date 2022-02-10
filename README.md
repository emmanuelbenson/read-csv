## Install Required Packages

```
yarn install
```

## App runs on port 8000
```
localhost:8000
```

## API endpoint is:
```
/echo
```

## HTTP method is:
```
post
```

#### This endpoint expects a file with fieldname _**csvFIle**_. Additional field is the _**renderType**_.

#### The _**renderType**_ acceptable values are:
* sum
* multiply
* flatten
* inverted
* default

#### When no value is passed, the _**renderType**_ assumes the _**default**_ value.