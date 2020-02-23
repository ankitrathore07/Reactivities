using System.Linq;
using Application.Interfaces;
using AutoMapper;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class FollowingResolver : IValueResolver<UserActivity, AttendeeDto, bool>
    {
        private readonly IUserAccessor _userAccessor;
        private readonly DataContext _context;
        public FollowingResolver(DataContext context, IUserAccessor userAccessor)
        {
            _context = context;
            _userAccessor = userAccessor;
        }

        public bool Resolve(UserActivity source, AttendeeDto destination, bool destMember, ResolutionContext context)
        {
            var currentUser = _context.Users.SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetCurrentUserName()).Result;
            if (currentUser.Followings.Any(x => x.targetId == source.AppUser.Id))
                return true;

            return false;
        }
    }
}