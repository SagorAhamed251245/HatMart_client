import getSingleProduct from "@/utils/getSingleProduct";

global.fetch = jest.fn((url) => {
  if (url.includes("product/64dd184e58cd6daa2b5a3579")) {
    return Promise.resolve({
      json: () => ({
        _id: "64dd184e58cd6daa2b5a3579",
        title: "Apple",
        price: 2.99,
        category: "Fruits",
      }),
    });
  }
});

describe("Single Product", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("should fetch a single product from the API", async () => {
    const productId = "64dd184e58cd6daa2b5a3579";
    const product = await getSingleProduct(productId);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_APIS}/product/${productId}`
    );

    expect(product).toEqual({
      _id: "64dd184e58cd6daa2b5a3579",
      title: "Apple",
      price: 2.99,
      category: "Fruits",
    });
  });

  it("should handle API errors", async () => {
    fetch.mockRejectedValue(new Error("API error"));

    const productId = "64dd184e58cd6daa2b5a3579";
    await expect(getSingleProduct(productId)).rejects.toThrow("API error");
  });
});
