// from App, send it an array of unique strings along with the useLocalStore hook;

const useKeyRing = (keys, localStore, o) => {
  const ring = !o ? {} : o;
  [...keys].forEach(storagekey => {
    ring[storagekey] = localStore(storagekey, [], true);
  });
  return ring;
};

export default useKeyRing;
