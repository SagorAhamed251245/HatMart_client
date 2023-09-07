import getProducts from "@/utils/getProducts";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(["Product 1", "Product 2"]),
  })
);

describe("All Products", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("should fetch products from the API", async () => {
    const products = await getProducts();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_APIS}/product`,
      {
        cache: "no-cache",
      }
    );

    expect(products).toEqual(["Product 1", "Product 2"]);
  });

  it("should handle API errors", async () => {
    fetch.mockRejectedValue(new Error("API error"));

    await expect(getProducts()).rejects.toThrow("API error");
  });
});
