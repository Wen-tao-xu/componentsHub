const n = (t, e) => (t.install = (o) => {
  for (const l of [t, ...Object.values({})])
    o.component(l.name, l);
}, t), s = (t = []) => ({
  install: (o) => {
    console.log(t), t.forEach((l) => o.use(l));
  }
});
export {
  s as makeInstaller,
  n as withInstall
};
