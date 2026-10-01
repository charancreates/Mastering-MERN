//generics are templates, code resuseable

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(24324);
wrapInArray(true);
wrapInArray({ flavor: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("pikachu", "pika");
pair("pikachu", 100);
pair("pikachu", false);
pair("pikachu", { type: "electric" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 10,
};
const numberBox2: Box<string> = {
  content: "10",
};

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "chocolate" },
};
