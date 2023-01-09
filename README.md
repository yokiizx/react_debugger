## React 17.0.2 basic debugged repo

##### install

```sh
npm i
```

##### create symlink

```sh
cd react_build/react && npm link
cd react_build/react-dom && npm link
cd react_build/scheduler && npm link
```

##### link pkg

```sh
cd .. && npm link react react-dom scheduler
```

##### start

```sh
npm start
```

And then you can debug react source code in chrome devtool.
