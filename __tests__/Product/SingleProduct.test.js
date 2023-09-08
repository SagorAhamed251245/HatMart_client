import getSingleProduct from "@/utils/getSingleProduct";

global.fetch = jest.fn((url) => {
  if (url.includes("productId/64de02f1272ee7f4d08c1f7d")) {
    return Promise.resolve({
      json: () => ({
        _id: "64de02f1272ee7f4d08c1f7d",
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
    const productId = "64de02f1272ee7f4d08c1f7d";
    const product = await getSingleProduct(productId);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_APIS}/productId/${productId}`
    );

    expect(product).toEqual({
      _id: "64de02f1272ee7f4d08c1f7d",
      title: "Apple",
      price: 2.99,
      category: "Fruits",
    });
  });

  it("should handle API errors", async () => {
    fetch.mockRejectedValue(new Error("API error"));

    const productId = "64de02f1272ee7f4d08c1f7d";
    await expect(getSingleProduct(productId)).rejects.toThrow("API error");
  });
});
