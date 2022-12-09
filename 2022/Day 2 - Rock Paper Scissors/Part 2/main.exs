defmodule Main do
  def solve() do
    {:ok, rounds} = File.read("input.txt")

    rounds
    |> String.split(~r/\R/)
    |> Enum.map(&scoreRound(&1))
    |> Enum.sum()
    |> IO.puts()
  end

  # ... against rock
  # lose
  def scoreRound("A X"), do: 3 + 0
  # draw
  def scoreRound("A Y"), do: 1 + 3
  # win
  def scoreRound("A Z"), do: 2 + 6

  # ... against paper
  # lose
  def scoreRound("B X"), do: 1 + 0
  # draw
  def scoreRound("B Y"), do: 2 + 3
  # win
  def scoreRound("B Z"), do: 3 + 6

  # ... against scissors
  # lose
  def scoreRound("C X"), do: 2 + 0
  # draw
  def scoreRound("C Y"), do: 3 + 3
  # win
  def scoreRound("C Z"), do: 1 + 6
  # 1..100_000 |> Stream.map(&(&1 * 3)) |> Enum.sum() |> IO.puts()
end

Main.solve()
