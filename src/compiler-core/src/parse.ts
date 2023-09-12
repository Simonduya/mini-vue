export function baseParse(content: string) {
    const  context = createParserContext(content);
  return {
    children: [
      {
        type: "interpolation",
        content: {
          type: "simple_expression",
          content: "message",
        },
      },
    ],
  };
}
