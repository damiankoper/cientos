# Stars

`<Stars />` is a component that renders a stars in the sky of your scene. It is an abstraction that use Points, PointsMaterial and BufferGeometry to create a beautiful stars effect

<!-- <StackBlitzEmbed projectId="tresjs-text3d-cientos" /> -->

## Usage

You can use `<Stars />` component without passing any props, but still if you want you can tweak the props to find the best setup for you

```vue
<template>
  <TresCanvas>
  ...
    <Stars />
    ...
  </TresCanvas>
</template>
```

Notice that you can pass a texture as an alphaMap to personalize the star shape

```vue
<template>
  <TresCanvas>
  ...
    <Stars :radius="50" :depth="20" :count="3000" :alphaMap="alphaMap"  />
    ...
  </TresCanvas>
</template>
```
## Props

| Prop               | Description                                                            | Default |
| :----------------- | :--------------------------------------------------------------------- | ------- |
| **size**           | The size of the stars                        |   0.1      |
| **sizeAttenuation**           | keep the same size regardless distance.|   true      |
| **transparent**           | show transparency on the stars texture                                 | true     |
| **alphaTest**         | enables the WebGL to know when not to render the pixeltext.                                                | 0.01     |
| **alphaMap**  | texture of the stars | null      |
| **count**   | number of stars      | 5000    |
| **depth** | depth of star's shape                         | 50    |
| **radius**      | Radius of star's shape                            | 100    |
