
class Stack

  def initialize
    @stack = []
  end

  def push(ele)
    @stack << ele
  end

  def pop
    @stack.pop
  end

  def peek
    @stack.first
  end

end


class Queue

  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue << ele
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue.first
  end

end


class Map

  def initialize
    @map = []
  end

  def set(key, value)
    idx = @map.index {|pair| pair[0] == key}
    if idx # if idx returns a number, its true
      @map[idx][1] = value
    else # returns nil which is false
      @map << [key, value]
    end
  end

  def get(key)
    @map.each do |pair|
      return pair if pair[0] == (key)
    end
  end

  def delete(key)
    @map.reject! {|pair| pair[0] == key}
    # idx = @map.index {|pair| pair[0] == key}
    # @map.delete(idx)
  end

  def show
    @map
  end

end