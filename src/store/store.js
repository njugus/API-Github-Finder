import { create } from "zustand";

const Store = (set) => ({
  username: "github",
  loading: null,
  error: null,

  setUser: (username) => set({ username }),

  repo_id: "",
  repo_name: "",
  repo_description: "",
  forks: "",
  stars: "",
  repoList: [],
  useUserRepo: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );
      const data = await response.json();
      if (response.ok) {
        const repos = data.map((current) => ({
          repo_id: current.id,
          repo_name: current.name,
          repo_description: current.description,
          forks: current.forks_count,
          stars: current.stargazers_count,
        }));
        set({ repoList: repos, loading: false });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      set({ loading: false, error: error.message });
      console.error("Error fetching repositories", error);
    }
  },

  following_id: "",
  following_avatar: "",
  following_name: "",
  following_url: "",
  followingList: [],

  useUserFollowing: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/following`,
      );
      const data = await response.json();
      if (response.ok) {
        const following = data.map((current) => ({
          following_id: current.id,
          following_avatar: current.avatar_url,
          following_name: current.login,
          following_url: current.html_url,
        }));
        set({ followingList: following, loading: false });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      set({ loading: false, error: error.message });
      console.error("Error fetching followers", error);
    }
  },

  followersList: [],
  follower_id: "",
  follower_avatar: "",
  follower_name: "",
  follower_url: "",

  useUserFollowers: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/followers`,
      );
      const data = await response.json();
      if (response.ok) {
        const followers = data.map((current) => ({
          follower_id: current.id,
          follower_avatar: current.avatar_url,
          follower_name: current.login,
          follower_url: current.html_url,
        }));
        set({ followersList: followers, loading: false });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      set({ loading: false, error: error.message });
      console.error("Error fetching followers", error);
    }
  },
});

const useStore = create(Store);
export default useStore;
