defmodule Main do
  def solve() do
    {:ok, rounds} = File.read("input.txt")

    rounds
    |> String.split(~r/\R/)
    |> Enum.map(&scoreRound(&1))
    |> Enum.sum()
    |> IO.puts()
  end

  def scoreRound("A X"), do: 1 + 3
  def scoreRound("A Y"), do: 2 + 6
  def scoreRound("A Z"), do: 3 + 0
  def scoreRound("B X"), do: 1 + 0
  def scoreRound("B Y"), do: 2 + 3
  def scoreRound("B Z"), do: 3 + 6
  def scoreRound("C X"), do: 1 + 6
  def scoreRound("C Y"), do: 2 + 0
  def scoreRound("C Z"), do: 3 + 3
  # 1..100_000 |> Stream.map(&(&1 * 3)) |> Enum.sum() |> IO.puts()
end

Main.solve()
