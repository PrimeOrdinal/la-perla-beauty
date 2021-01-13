export function transformContentstackProduct (edge) {
    const { node } = edge;

    const transformed = {
        node: {
            ...node
        }
    };

    return transformed;
}