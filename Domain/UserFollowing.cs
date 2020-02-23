namespace Domain
{
    public class UserFollowing
    {
        public string ObserverId { get; set; }
        public virtual AppUser Observer { get; set; }

        public string targetId { get; set; }
        public virtual AppUser Target { get; set; }
    }
}