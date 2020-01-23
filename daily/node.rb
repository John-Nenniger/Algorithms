class Node
    attr_accessor :value
    attr_accessor :left
    attr_accessor :right
    attr_accessor :parent

    def initialize(value, left, right)
        @value = value
        @left = left
        @right = right
        @parent = nil
    end
end
