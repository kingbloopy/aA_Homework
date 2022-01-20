
# A Very Hungry Octopus wants to eat the longest fish in an array of fish.

SCHOOL = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 
'fiiiissshhhhhh']

# => "fiiiissshhhhhh"

# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths
# O(n^2)- nested loop

def sluggish
  max = ""
  SCHOOL.each do |fish1|
    SCHOOL.each do |fish2|
      if max.empty? || fish2.length >= fish1.length
        max = fish2
      end
    end
  end
  max
end

# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs in O(n log n) 
# in the sorting complexity demo from the Sorting Complexity reading. Remember that Big O is classified 
# by the dominant term. - quicksort

def dominant(school)
  return school if school.length <= 1
  pivot = school.first

  longer = school.drop(1).select {|f| f.length >= pivot.length}

  dominant(longer)
end

school = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 
'fiiiissshhhhhh']

p dominant(school)


# Clever Octopus
# Find the longest fish in O(n) time. The octopus can hold on to the longest fish that 
# you have found so far while stepping through the array only once. - linear/iterating

def clever
  SCHOOL.inject{|max, fish| fish.length >= max.length ? fish : max}
end


# Dancing Octopus
# Full of fish, the Octopus attempts Dance Dance Revolution. The game has tiles in the following directions:

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down","left",  "left-up" ]
# To play the game, the octopus must step on a tile with her corresponding tentacle. 
# We can assume that the octopus's eight tentacles are numbered and correspond to the tile direction indices.


def slow(dir, arr)
  arr.each_with_index {|d, i| return i if d == dir}
end


def constant(dir, arr)
  arr.index(dir)
end
