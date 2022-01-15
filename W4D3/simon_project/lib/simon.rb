class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    if !@game_over
      round_success_message 
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "repeat back new sequence one color at a time"
    color = gets.chomp
    if color != seq.first
      @game_over = true
    end
  end

  def add_random_color
    colors = ["red", "blue", "yellow", "green"]
    seq << colors.sample
  end

  def round_success_message
    puts "you won!"
  end

  def game_over_message
    puts "you lost!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
