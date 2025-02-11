export type NodeType = 'OPERATOR' | 'NODE';
export type Node = BaseNode & (OperatorNode | ChildNode);
export type Tree = {
  [key: number]: Node;
};

interface BaseNode {
  parent: number | null;
  children: number[];
  value: number | string;
  type: NodeType;
  depth: number;
}

interface OperatorNode {
  type: 'OPERATOR';
}

interface ChildNode {
  type: 'NODE';
  classification?: Node[];
}
