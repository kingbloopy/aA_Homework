class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    @cups.each_with_index do |cup, i|
      next if i == 6 || i == 13
      4.times { cup << :stone }
    end
  end

  def valid_move?(start_pos)
    if start_pos < 0 || start_pos > 13
      raise "Invalid starting cup"
    end
    if @cups[start_pos].empty?
      raise 'Starting cup is empty'
    end
  end

  def make_move(start_pos, current_player_name)
    start_cup = @cups[start_pos]
    @cups[start_pos] = []

    cup_i = start_pos
    until start_cup.empty?
      cup_i += 1
      cup_i = 0 if cup_i > 13

      if cup_i == 6
        @cups[6] << start_cup.pop if current_player_name == @name1
      elsif cup_i == 13
          @cups[13] << start_cup.pop if current_player_name == @name2
      else
          @cups[cup_i] << start_cup.pop
      end
    end
    render
    next_turn(cup_i)
  end

  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    left = @cups[0...6].all? {|cup| cup.empty?}
    right = @cups[7...13].all? {|cup| cup.empty?}

    left || right
  end

  def winner
    player1_count = @cups[6].length
    player2_count = @cups[13].length

    if player1_count == player2_count
      :draw
    elsif player1_count > player2_count
      return @name1
    else
      return @name2
    end
  end
end
