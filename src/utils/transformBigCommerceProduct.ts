export function transformBigCommerceProduct (edge) {
    const { node } = edge;

    const url = node.custom_url?.url;

    const transformed = {
        node: {
            ...node,
            url
        }
    };

    return transformed;
}