
class LRUCache

  attr_reader :size

  def initialize(size)
    @size = size
    @underlying_array = []
  end

  def count
    @underlying_array.length
  end

  def add(ele)
    if @underlying_array.include?(ele)
      @underlying_array << @underlying_array.delete(ele)
      ele
    else
      if count < size
        @underlying_array << ele
        ele
      else
        @underlying_array.unshift
        @underlying_array << ele
        ele
      end
    end
  end

  def show
    p @underlying_array
  end

  private

end